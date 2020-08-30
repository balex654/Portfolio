<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%
/**
 * @author Ben Alexander
 * Data entry form for Q1
 */
%>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
Q1<br><br>

	<form method="get" action="ResultQ1.jsp">
		Enter Limit of Results:<br>
		<input type="text" name="limit"><br>
		Enter Year:<br>
		<input type="text" name="year"><br>
		Enter Month:<br>
		<input type="text" name="month"><br>
		<input type="submit" value="Go">
	</form>
	
</body>
</html>