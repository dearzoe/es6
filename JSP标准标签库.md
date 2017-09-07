title: JSP标准标签库
speaker: 胡文哲
url: https://github.com/ksky521/nodePPT
transition: cards
files: /js/demo.js,/css/demo.css

[slide]

# JSP标准标签库
## 演讲者：胡文哲

[slide]

## JSP 标准标签库（JSTL）
@(JSP 标准标签库)[核心标签,格式化标签,SQL 标签,XML 标签,JSTL 函数]
####  是一个JSP标签集合，它封装了JSP应用的通用核心功能。
 JSTL支持通用的、结构化的任务，比如迭代，条件判断，XML文档操作，国际化标签，SQL标签。 除了这些，它还提供了一个框架来使用集成JSTL的自定义标签。
根据JSTL标签所提供的功能，可以将其分为5个类别。
- 核心标签
- 格式化标签
- SQL 标签
- XML 标签
- JSTL 函数

[slide]

#### 3. SQL标签
###### _引入语法_：`<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>`
###### 数据库：test
###### 用户名：root
###### 密码: 123

##### 标签包括有：
| 标签		 |描述  |
| :-------- | :--------|
| ```<sql:setDataSource>```|指定数据源|
| ```<sql:query>```|运行SQL查询语句|
| ```<sql:update>```|运行SQL更新语句|
| ```<sql:param>```|将SQL语句中的参数设为指定值|
| ```<sql:dateParam>```|将SQL语句中的日期参数设为指定的java.util.Date 对象值|
| ```<sql:transaction>```|在共享数据库连接中提供嵌套的数据库行为元素，将所有语句以一个事务的形式来运行|

[slide]

##### 3.1  `<sql:setDataSource>` 指定数据源，用来配置数据源或者将数据源信息存储在某作用域的变量中，用来作为其他Jstl数据库操作的数据源。

##### 属性：
| 属性|     描述|   是否必要	|默认值|
| :-------- | :--------| :------ |:------|
| driver|   要注册的JDBC驱动|  	否|	无|
| url|   	数据库连接的JDBC URL|  否|	无|
| user|   数据库用户名|  否|	无|
| password|   数据库密码|  否|	无|
| dataSource|   事先准备好的数据库|  否|	无|
| var|   代表数据库的变量|  否|默认设置|
| scope|   	var属性的作用域|  否|Page|

[slide]

##### 实例：
```
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"   pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
    <sql:setDataSource var="snapshot"     <!--指定数据源-->
　　　　 driver="com.mysql.jdbc.Driver"     //要注册的JDBC驱动
        url="jdbc:mysql://localhost/test"  //数据库连接的JDBC URL
        user="root"                        //数据库用户名
        password="123" />
</body>
</html>
```

[slide]

##### 3.2  `<sql:query>` 用来**运行**_select_语言，并将结果存储在作用域变量中。

##### 属性：
| 属性|     描述|   是否必要	|默认值|
| :-------- | :--------| :------ |:------|
| sql|   需要执行的SQL命令（返回一个ResultSet对象)|  	否|	Body|
| dataSource|   	所使用的数据库连接（覆盖默认值）|  否|		默认数据库|
| maxRows|   存储在变量中的最大结果数|  否|	无穷大|
| startRow|   	开始记录的结果的行数|  否|	0|
| var|   代表数据库的变量|  否|	默认设置|
| scope|   	var属性的作用域|  否|Page|

[slide]

##### 实例：
```
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
    <sql:setDataSource var="snapshot" driver="com.mysql.jdbc.Driver"
        url="jdbc:mysql://localhost/test"
        user="root"
        password="123" />
    <sql:query dataSource="${snapshot}" var="result">
        select * from Employees;
    </sql:query>
    <table border="1" width="100%">
        <tr>
            <th>Emp ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
        </tr>
        <c:forEach var="row" items="${result.rows}">
        <tr>
            <td><c:out value="${row.id}" /></td>
            <td><c:out value="${row.first}" /></td>
            <td><c:out value="${row.last}" /></td>
            <td><c:out value="${row.age}" /></td>
        </tr>
        </c:forEach>
    </table>
</body>
</html>
```

[slide]

> #### 引用：
> SQL标签：[happyeverydayhxy](http://www.cnblogs.com/blog-yuesheng521/p/5506659.html)