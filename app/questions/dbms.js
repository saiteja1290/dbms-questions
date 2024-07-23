export default [
    {
        id: 1,
        question: "What is DBMS? Mention advantages.",
        answer: "Database Management System (DBMS) is a software for storing and retrieving users' data while considering appropriate security measures. It consists of a group of programs which manipulate the database. The DBMS accepts the request for data from an application and instructs the operating system to provide the specific data. In large systems, a DBMS helps users and other third-party software to store and retrieve data.\n\nAdvantages:\n- Improved data sharing\n- Improved data security\n- Better data integration\n- Minimised data inconsistency\n- Improved data access\n- Improved decision making\n- Improved end-user productivity"
    },
    {
        id: 2,
        question: "What is Database?",
        answer: "A database is an organised collection of structured information, or data, typically stored electronically in a computer system. A database is usually controlled by a database management system (DBMS). Together, the data and the DBMS, along with the applications that are associated with them, are referred to as a database system, often shortened to just a database."
    },
    {
        id: 3,
        question: "What is RDBMS? Properties..",
        answer: "A Relational Database Management system (RDBMS) is a database management system that is based on the relational model. It has the following major components: Table, Record/Tuple/Row, Field, and Column/Attribute. Examples of the most popular RDBMS are MYSQL, Oracle, IBM DB2, and Microsoft SQL Server database.\n\nRelational databases have the following properties:\n- Values are atomic.\n- All of the values in a column have the same data type.\n- Each row is unique.\n- The sequence of columns is insignificant.\n- The sequence of rows is insignificant.\n- Each column has a unique name.\n- Integrity constraints maintain data consistency across multiple tables."
    },
    {
        id: 4,
        question: "Types of database languages",
        answer: "1. Data Definition Language (DDL): Used to define database structure or pattern.\n2. Data Manipulation Language (DML): Used for accessing and manipulating data in a database. It handles user requests.\n3. Data Control Language (DCL): Used to retrieve the stored or saved data.\n4. Transaction Control Language (TCL): Used to run the changes made by the DML statement. TCL can be grouped into a logical transaction."
    },
    {
        id: 5,
        question: "ACID properties (VVVVV IMP)",
        answer: "To ensure the consistency of the database, certain properties are followed by all the transactions occurring in the system. These properties are called ACID Properties of a transaction:\n\n- Atomicity\n- Consistency\n- Isolation\n- Durability"
    },
    {
        id: 6,
        question: "Difference between vertical and horizontal scaling ",
        answer: "Scaling alters the size of a system. In the scaling process, we either compress or expand the system to meet the expected needs. The scaling operation can be achieved by adding resources to meet the smaller expectation in the current system, or by adding a new system in the existing one, or both.Vertical scaling keeps your existing infrastructure but adds computing power. Your existing pool of code does not need to change — you simply need to run the same code on machines with better specs. By scaling up, you increase the capacity of a single machine and increase its throughput.\n Vertical scaling allows data to live on a single node, and scaling spreads the load through CPU and RAM resources for your machines.\nHorizontal scaling simply adds more instances of machines without first implementing improvements to existing specifications. By scaling out, you share the processing power and load balancing across multiple machines."
    },
    {
        id: 7,
        question: "What is sharding  ",
        answer: "Sharding is a method of splitting and storing a single logical dataset in multiple databases. By distributing the data among multiple machines, a cluster of database systems can store larger dataset and handle additional requests. Sharding is necessary if a dataset is too large to be stored in a single database. Moreover, many sharding strategies allow additional machines to be added. Sharding allows a database cluster to scale along with its data and traffic growth."
    },
    {
        id: 8,
        question: "Keys in DBMS ",
        answer: "A key is a set of attributes that can identify each tuple uniquely in the given relation.\n \nTypes of Keys:\n\n• Super Key - A superkey is a set of attributes that can identify each tuple uniquely in the given relation. A super key may consist of any number of attributes.\n\n• Candidate Key - A set of minimal attribute(s) that can identify each tuple uniquely in the given relation is called a candidate key.\n\n• Primary Key - A primary key is a candidate key that the database designer selects while designing the database. Primary Keys are unique and NOT NULL.\n\n• Alternate Key - Candidate keys that are left unimplemented or unused after implementing the primary key are called alternate keys.\n\n• Foreign Key - An attribute 'X' is called as a foreign key to some other attribute 'Y' when its values are dependent on the values of attribute 'Y'. The relation in which attribute 'Y' is present is called the referenced relation. The relation in which attribute 'X' is present is called the referencing relation.\n\n• Composite Key - A primary key composed of multiple attributes and not just a single attribute is called a composite key.\n\n• Unique Key - It is unique for all the records of the table. Once assigned, its value cannot be changed i.e. it is non-updatable. It may have a NULL value."
    },
    // Add more questions here...
]