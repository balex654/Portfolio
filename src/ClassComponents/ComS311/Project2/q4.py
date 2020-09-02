def line_edits(s1, s2):
    """function for generating the descriptions of line edits"""
    l1 = s1.splitlines()
    l2 = s2.splitlines()
    
    result = editDistance(l1, l2)
    
    result = result[::-1]
    
    return result


def editDistance(l1, l2):
    """Helper function to generate the table for line edits"""
    cache = [[None for i in range(len(l2) + 1)] for j in range(len(l1) + 1)]
    
    for row in range(len(l1) + 1):
        for col in range(len(l2) + 1):
            if row == 0 and col == 0:
                cache[row][col] = 0
            elif col == 0:
                cache[row][col] = row
            elif row == 0:
                cache[row][col] = col
            elif l1[row - 1] == l2[col - 1]:
                cache[row][col] = cache[row - 1][col - 1]
            else:
                a = cache[row - 1][col]
                b = cache[row][col - 1]
                c = cache[row - 1][col - 1]
                cache[row][col] = min(a, b, c) + 1

    return findResult(l1, l2, cache)

def findResult(l1, l2, table):
    """Helper function to find the result after the table has been built"""
    rowH = len(l1)
    colH = len(l2)
    resultH = []
    while rowH != 0 or colH != 0:
        if colH == 0:
            action = ('D', l1[rowH - 1], "")
            resultH.append(action)
            rowH = rowH - 1            
        elif rowH == 0:
            action = ('I', "", l2[colH - 1])
            resultH.append(action)
            colH = colH - 1            
        elif l1[rowH - 1] == l2[colH - 1]:
            action = ('T', l1[rowH - 1], l2[colH - 1])
            resultH.append(action)
            rowH = rowH - 1
            colH = colH - 1
        else:
            rowH, colH, resultH = otherHelper(table, (l1, l2), rowH, colH, resultH)           
    return resultH

def otherHelper(table, l, rowH, colH, resultH):
    """helper method to shorten the above function"""
    l1 = l[0]
    l2 = l[1]
    delete = table[rowH - 1][colH]
    insert = table[rowH][colH - 1]
    sub = table[rowH - 1][colH - 1]
    
    if delete <= insert and delete <= sub:
        action = ('D', l1[rowH - 1], "")
        resultH.append(action)
        rowH = rowH - 1
    elif insert < delete and insert <= sub:
        action = ('I', "", l2[colH - 1])
        resultH.append(action)
        colH = colH - 1
    elif sub < delete and sub < insert:
        action = ('S', l1[rowH - 1], l2[colH - 1])
        resultH.append(action)
        rowH = rowH - 1
        colH = colH - 1
    return rowH, colH, resultH

s1 = "Line1\nLine2\nLine3\nLine4\n"
s2 = "Line1\nLine3\nLine4\nLine5\n"

s3 = "Line1\nLine2\nLine3\nLine4\n"
s4 = "Line5\nLine4\nLine3\n"

s5 = "Line1\n"
s6 = ""

table = line_edits(s1, s2)
for row in table:
    print(row)