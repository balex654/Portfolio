<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%@ page import="java.io.*,java.util.*,java.sql.*"%>
<%@ page import="javax.servlet.http.*,javax.servlet.*"%>
<%
/**
 * @author Ben Alexander
 * Displays the result of Q1 query with input data from Q1.jsp
 */
%>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
	
	Connection conn =null;
	Statement stmt =null;
	ResultSet rs =null;
	
	try{
		Class.forName("com.mysql.jdbc.Driver");
		conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/project?useSSL=false", "cs363project", "cs363balex");
		stmt = conn.createStatement();

		int yr = Integer.parseInt(request.getParameter("year"));
		int mn = Integer.parseInt(request.getParameter("month"));
		int lm = Integer.parseInt(request.getParameter("limit"));
		
		//Statement string
		String q1 = "select t.retweet_count, t.textbody, t.screen_name, u.category, u.sub_category " +
				"from tweet t, userAccount u where t.screen_name = u.screen_name and " + 
				"t.year = ? and t.month = ? order by t.retweet_count desc limit ?";
 		
		PreparedStatement query1 = conn.prepareStatement(q1);
		query1.setInt(1, yr);
		query1.setInt(2, mn);
		query1.setInt(3, lm);
		
 		rs = query1.executeQuery();
		
 		%>
 		<form method="get" action="select.jsp">
 			<input type="submit" value="Back">
 		</form>
 		<%
 		//While loop that displays the output on the web page
		while(rs.next()){
			String rc = rs.getString("retweet_count");
			String tb = rs.getString("textbody");
			String sn = rs.getString("screen_name");
			String category = rs.getString("category");
			String sc = rs.getString("sub_category");
			System.out.println(rc + "	" + tb + "	" + sn + "		" + category + "	" + sc);
			%>
			<p>Retweet Count: <%=rc%><br>Textbody: <%=tb%><br>Screen Name: <%=sn%><br>Category: <%=category%><br>Sub-category: <%=sc%></p>
			<%
		}
		
	} catch (SQLException e) {
		out.println("An exception occurred: " + e.getMessage());
	} finally {
		if (rs!= null) rs.close();
		if (stmt!= null) stmt.close();
		if (conn != null) conn.close();
	}
	%>
	
</body>
</html>