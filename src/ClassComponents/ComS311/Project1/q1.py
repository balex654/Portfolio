def adapter_chain(adapters_info, charger_plug, wall_socket):
    adapter_list = []

    adj_list = adjacency_list(adapters_info)
    parent = bfs_tree(adj_list, charger_plug)
    
    return tree_path(parent, charger_plug, wall_socket, [])
    

def tree_path(parent, s, t, path):
    start = s
    if start == t:
        path.append(s)
        return path
    else:
        return tree_path(parent, start + 1, parent[t], path)
            

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
                edgeTuple = (int(str.split()[1]), None)
                nodeList.append(edgeTuple)
        adj.append(nodeList)
    return adj


def bfs_tree(adj_list, start):
    vertices = len(adj_list)
    parent = []
    state = []
    queue = []

    for x in range(vertices):
        parent.append(None)
        state.append('U')
    
    state[start] = 'D'
    queue.append(start)

    return bfs_loop(adj_list, queue, state, parent)

def bfs_loop(adj_list, queue, state, parent):
    while(len(queue) != 0):
        vertex = queue.pop(0)
        for v in adj_list[vertex]:
            if state[v[0]] == 'U':
                state[v[0]] = 'D'
                parent[v[0]] = vertex
                queue.append(v[0])
            state[vertex] = 'P'
    return parent

str1 = "D 6\n0 4\n4 3\n4 1\n1 5\n1 2"
print (adapter_chain(str1, 0, 5))