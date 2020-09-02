def maximum_energy(city_map, depot_position):
    adj = adj_list(city_map)


    for x in range(len(adj)):
        if adj[x] == [] and x == depot_position:
            return 0
    
    distance = dijkstra(adj, depot_position)
    largest = 0
    for x in distance:
        if x > largest and x != float('inf'):
            largest = x

    return largest * 2
            

def dijkstra(adj_list, start):
    n = len(adj_list)
    in_tree = []
    distance = []
    parent = []
    for x in range(n):
        in_tree.append(False)
        distance.append(float('inf'))
        parent.append(None)
    distance[start] = 0

    while all(in_tree) == False:
        u = next_vertex(in_tree, distance)
        in_tree[u] = True
        for v, weight in adj_list[u]:
            if (not in_tree[v]) and (distance[u] + weight < distance[v]):
                distance[v] = distance[u] + weight
                parent[v] = u
    return distance

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

str1 = "U 4 W\n0 2 5\n0 3 2\n3 2 2"
str2 = "U 5 W\n0 1 1\n0 3 3\n1 3 4\n1 4 1\n1 2 2\n4 3 2\n4 2 3"
str3 = "U 7 W\n0 1 6\n1 2 6\n0 2 10\n0 3 3\n3 4 3\n4 5 1"
print maximum_energy(str3, 0)