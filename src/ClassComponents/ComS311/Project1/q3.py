from collections import deque

def computation_order(dependencies):
    adj_list = adjacency_list(dependencies)
    result = None
    try: topological_sort(adj_list)
    except ValueError: return result
    return topological_sort(adj_list)

def topological_sort(graph):
    order, enter, state = deque(), set(graph), {}
    def dfs(node):
        state[node] = 0
        for k in graph.get(node, ()):
            sk = state.get(k, None)
            if sk == 0: raise ValueError(None)
            if sk == 1: continue
            enter.discard(k)
            dfs(k)
        order.appendleft(node)
        state[node] = 1
    while enter: dfs(enter.pop())
    sort = []
    for x in range(len(order)):
        sort.append(order[len(order) - 1 - x])
    return sort

def adjacency_list(graph_str):
    l = graph_str.splitlines()
    edges = l[1:len(l)]
    vertices = int(l[0].split()[1])
    adj = []  
    for x in range(vertices):
        nodeList = []
        for y in range(len(edges)):
            if int(edges[y].split()[0]) == x:
                str = edges[y]
                edge = int(str.split()[1])
                nodeList.append(edge)
        adj.append(nodeList)
    adj_dict = {}
    for x in range(len(adj)):
        adj_dict.update({x:adj[x]})
    return adj_dict

str1 = "D 5\n0 3\n3 1\n1 4\n4 2"
str2 = "D 2\n0 1"
str3 = "D 3\n1 2\n0 2"
str4 = "D 3"
str5 = "D 5\n2 3\n3 2"
print computation_order(str5)