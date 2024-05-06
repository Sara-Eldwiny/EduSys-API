# EduSys API

**This project is a RESTful API server built with Node.js, Express.js, and MongoDB. It provides endpoints to manage a system for organizing children, classes, and teachers in an educational institution.**

## Key Features:
__Children Management__: Allows users to add, update, retrieve, and delete information about children, including their full name, age, level, and address details.

__Class Management__: Provides functionalities to handle classes, including adding new classes, updating class information, deleting classes, and retrieving information about classes. Each class has a supervisor and a list of enrolled children.

__Teacher Management__: Offers endpoints to manage teachers, including adding new teachers, updating teacher information, and deleting teachers. Teachers can also be designated as supervisors for classes.

__Relationships__: Establishes relationships between classes, teachers, and children, enabling retrieval of related data such as children in a class or the supervisor of a class.

## Technologies Used:
__Express.js__: A fast, minimalist web framework for Node.js used to build robust APIs.

__MongoDB__: A NoSQL database used to store and manage data related to children, classes, and teachers.

__Mongoose__: An Object Data Modeling (ODM) library for MongoDB and Node.js, providing a straightforward schema-based solution to model application data.

## Purpose:
The primary purpose of this project is to facilitate the management of children, classes, and teachers within an educational institution. It provides a flexible and scalable backend solution that can be integrated with frontend applications to create a comprehensive educational management system.
