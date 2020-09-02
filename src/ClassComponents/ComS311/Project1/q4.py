def which_walkways(campus_map):
    adj = adj_list(campus_map)
    parent = prim(adj, 0)
    
    result = []
    for x in range(len(parent)):
        if parent[x] != None:
            if parent[x] <= x:
                pair = (parent[x], x)
                result.append(pair)
            if parent[x] > x:
                pair = (x, parent[x])
                result.append(pair)
    return result

def adj_list(graph):
    l = graph.splitlines()
    edges = l[1:len(l)]
    vertices = int(l[0].split()[1])
    adj = []

    for x in range(vertices):
        nodeList = []
        for y in range(len(edges)):
            data = edges[y].split()
            if int(data[0]) == x:
                edge = (int(data[1]), int(data[2]))
                nodeList.append(edge)
            if int(data[1]) == x:
                edge = (int(data[0]), int(data[2]))
                nodeList.append(edge)
        adj.append(nodeList)
    return adj

def prim(adj, s):
    n = len(adj)
    in_tree = [False] * n
    distance = [float('inf')] * n
    parent = [None] * n
    distance[s] = 0

    while all(in_tree) == False:
        u = next_vertex(in_tree, distance)
        in_tree[u] = True
        for v, weight in adj[u]:
            if (not in_tree[v]) and (weight < distance[v]):
                distance[v] = weight
                parent[v] = u
    return parent

def next_vertex(in_tree, distance):
    false_indexes = []
    count = 0
    for x in in_tree:
        if x == False:
            false_indexes.append(count)
        count += 1
    
    smallest = distance[false_indexes[0]]
    smallest_index = false_indexes[0]
    for x in false_indexes:
        current = distance[x]
        if current < smallest:
            smallest = current
            smallest_index = x

    return smallest_index

str0 = "U 6 W\n0 3 3\n0 4 1\n0 1 3\n1 4 1\n3 4 1\n4 5 1\n1 5 3\n1 2 3\n2 5 1"
str1 = "U 3 W\n0 1 1\n2 1 2\n2 0 4"
str2 = "U 1 W"
str3 = "U 4 W\n0 1 1\n0 2 2\n0 3 4\n2 1 4\n2 3 1\n1 3 2"
print(sorted(which_walkways(str3)))