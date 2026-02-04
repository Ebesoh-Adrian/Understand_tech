# Understand_tech

# Complete Software Engineering Terminology Guide
**A Comprehensive Reference for Full-Stack Developers**

---

## TABLE OF CONTENTS
1. [Data Structures & Algorithms (DSA)](#1-data-structures--algorithms-dsa)
2. [Database Concepts & Types](#2-database-concepts--types)
3. [Frontend Terminology](#3-frontend-terminology)
4. [Backend & API Terminology](#4-backend--api-terminology)
5. [System Architecture & Design Patterns](#5-system-architecture--design-patterns)
6. [DevOps & Infrastructure](#6-devops--infrastructure)
7. [Web & Network Concepts](#7-web--network-concepts)
8. [Testing & Quality Assurance](#8-testing--quality-assurance)
9. [Security Terminology](#9-security-terminology)
10. [Performance Optimization](#10-performance-optimization)
11. [Software Development Practices](#11-software-development-practices)

---

# 1. DATA STRUCTURES & ALGORITHMS (DSA)

## 1.1 LINEAR DATA STRUCTURES

### **Array**
**Definition:** A collection of elements stored in contiguous memory locations, accessed by index.

**Real-life Example:** 
- A row of seats in a theater numbered 1-100. You know exactly where seat #45 is because they're in order.
- In ClinchDate, storing user profile images in a list where image[0] is the first photo, image[1] is the second.

**Time Complexity:**
- Access: O(1) - Direct access by index
- Search: O(n) - Linear search
- Insert: O(n) - May require shifting elements
- Delete: O(n) - May require shifting elements

**Use Case:** When you need fast access to elements by position.

---

### **Linked List**
**Definition:** A sequence of nodes where each node contains data and a reference (pointer) to the next node.

**Real-life Example:**
- A train with connected cars. To get to car #5, you must go through cars 1, 2, 3, and 4.
- Browser history where each webpage is a node, and you can go back/forward through links.

**Types:**
- **Singly Linked List:** Each node points to the next one only
- **Doubly Linked List:** Each node points to both next and previous
- **Circular Linked List:** Last node points back to first

**Time Complexity:**
- Access: O(n) - Must traverse from start
- Search: O(n)
- Insert: O(1) - Once you have the position
- Delete: O(1) - Once you have the position

**Use Case:** When you frequently insert/delete from beginning or don't need random access.

---

### **Stack**
**Definition:** Last-In-First-Out (LIFO) data structure - last element added is first to be removed.

**Real-life Example:**
- A stack of plates in a cafeteria. You put the clean plate on top and take from the top.
- Browser's back button - you visit websites A → B → C, pressing back gives you C → B → A.
- Function call stack in programming - last function called is first to return.

**Operations:**
- **Push:** Add element to top - O(1)
- **Pop:** Remove from top - O(1)
- **Peek:** View top element - O(1)

**Use Cases:**
- Undo/Redo functionality
- Expression evaluation (converting infix to postfix)
- Backtracking problems
- Browser history

---

### **Queue**
**Definition:** First-In-First-Out (FIFO) data structure - first element added is first to be removed.

**Real-life Example:**
- A line at a bank. First person who arrives is first to be served.
- Task processing - you add tasks to a queue and process them in order.
- Print queue - documents print in the order they were submitted.

**Operations:**
- **Enqueue:** Add to rear - O(1)
- **Dequeue:** Remove from front - O(1)
- **Peek:** View front element - O(1)

**Variants:**
- **Priority Queue:** Elements processed by priority, not just order
- **Deque (Double Ended Queue):** Can add/remove from both ends
- **Circular Queue:** End connects back to beginning

**Use Cases:**
- Task scheduling
- Breadth-First Search (BFS)
- Printer queues
- Message processing systems

---

## 1.2 HIERARCHICAL DATA STRUCTURES

### **Tree**
**Definition:** Hierarchical data structure with a root node and child nodes, forming a parent-child relationship.

**Real-life Example:**
- Company organizational chart with CEO at top, managers below, employees below them.
- File system - root folder contains subfolders containing files.
- Family tree showing ancestry relationships.

**Key Terms:**
- **Root:** Top node
- **Leaf:** Node with no children
- **Height:** Distance from node to deepest leaf
- **Depth:** Distance from root to node
- **Subtree:** Any node and its descendants

---

### **Binary Tree**
**Definition:** Tree where each node has at most 2 children (left and right).

**Real-life Example:**
- Decision tree: "Is the number > 50? Yes → Left, No → Right"
- Expression trees for mathematical expressions
- DOM structure (though not always binary)

**Types:**

**Full Binary Tree:** Every node has 0 or 2 children
```
      1
     / \
    2   3
   / \ / \
  4  5 6  7
```

**Perfect Binary Tree:** All levels completely filled
**Complete Binary Tree:** All levels filled except possibly last level (filled left to right)
**Balanced Binary Tree:** Height difference between left and right subtrees ≤ 1

**Traversals:** (Time: O(n), Space: O(h) where h is height)
- **Inorder (Left, Root, Right):** Used for sorted output
- **Preorder (Root, Left, Right):** Used for copying tree
- **Postorder (Left, Right, Root):** Used for deleting tree
- **Level-order (BFS):** Top-to-bottom, left-to-right

---

### **Binary Search Tree (BST)**
**Definition:** Binary tree where left child < parent < right child.

**Real-life Example:**
- A dictionary indexed alphabetically - you narrow down by checking if word is before/after current word.
- Searching for a product in an online store by price range.

**Operations:**
- **Search:** O(log n) average, O(n) worst case
- **Insert:** O(log n) average, O(n) worst case
- **Delete:** O(log n) average, O(n) worst case

**Use Case:** When you need efficient searching and need to maintain sorted order.

---

### **AVL Tree & Red-Black Tree**
**Definition:** Self-balancing BSTs that maintain balance factor to ensure O(log n) operations.

**Real-life Example:**
- Database indexing systems that must maintain speed even with millions of records.
- File systems that need fast search with guaranteed performance.

**Difference:**
- **AVL Tree:** Stricter balance, slower insertion/deletion but faster search
- **Red-Black Tree:** Looser balance, faster insertion/deletion

---

### **Heap**
**Definition:** Complete binary tree where parent node is ordered relative to children (min-heap or max-heap).

**Real-life Example:**
- Hospital emergency room triage - critical patients go first regardless of arrival order.
- Task scheduler with priorities.
- Streaming median calculation.

**Types:**
- **Max Heap:** Parent ≥ children (largest at top)
- **Min Heap:** Parent ≤ children (smallest at top)

**Operations:**
- **Insert:** O(log n)
- **Delete Max/Min:** O(log n)
- **Find Max/Min:** O(1)
- **Heapify:** O(n)

**Use Cases:**
- Priority queues
- Heap sort algorithm
- Finding k largest/smallest elements
- Dijkstra's algorithm

---

### **Trie (Prefix Tree)**
**Definition:** Tree structure for storing strings where each node represents a character.

**Real-life Example:**
- Auto-complete in search engines (Google)
- Phone keypad T9 prediction
- Spell checkers
- IP routing tables

**Structure:**
```
       root
      / | \
     a  b  c
    /|\     |
   p r x    a
   |        |
   p        t
   |
 (end)
```
Represents: "app", "ar", "ax", "cat"

**Operations:**
- **Insert:** O(m) where m is word length
- **Search:** O(m)
- **StartsWith:** O(m)

**Advantage:** Fast string searches, space-efficient for many strings with common prefixes.

---

### **Graph**
**Definition:** Network of nodes (vertices) connected by edges, can be directed or undirected.

**Real-life Example:**
- Social network where people are nodes and friendships are edges.
- Road maps where cities are nodes and roads are edges.
- Dependencies in your codebase (module A depends on module B).
- ClinchDate's matching algorithm using graph theory to suggest matches.

**Types:**

**Directed Graph (Digraph):**
- Edges have direction (one-way streets)
- Used for: task dependencies, recommendation engines

**Undirected Graph:**
- Edges have no direction (two-way streets)
- Used for: social networks, peer-to-peer networks

**Weighted Graph:**
- Edges have values/weights
- Used for: GPS navigation (distance/time), payment processing (costs)

**Cyclic Graph:**
- Has at least one cycle (path that returns to starting node)

**Acyclic Graph (DAG):**
- No cycles exist
- Used for: project scheduling, version control

**Graph Representations:**
- **Adjacency Matrix:** 2D array (good for dense graphs)
- **Adjacency List:** Map of nodes to their neighbors (good for sparse graphs)

**Traversals:**
- **DFS (Depth-First Search):** O(V+E) - explore deep before wide
- **BFS (Breadth-First Search):** O(V+E) - explore level by level

---

## 1.3 HASHING DATA STRUCTURES

### **Hash Table / Hash Map**
**Definition:** Data structure that maps keys to values using a hash function.

**Real-life Example:**
- Restaurant reservation system: Customer name (key) maps to table number (value)
- Dictionary: Word (key) maps to definition (value)
- Database indexes for fast lookups
- ClinchDate user store: User ID (key) maps to user profile object (value)

**How it works:**
```
Key → Hash Function → Index → Value
"john@example.com" → hash() → 45 → {name: "John", age: 28}
```

**Operations:**
- **Insert:** O(1) average, O(n) worst case
- **Delete:** O(1) average, O(n) worst case
- **Search:** O(1) average, O(n) worst case

**Collision Handling:**
- **Chaining:** Multiple values stored in list at same index
- **Open Addressing:** Find another empty slot (linear probing, quadratic probing)

**Load Factor:** Elements / Table Size
- When load factor > 0.75, table is resized (rehashed)

**Use Cases:**
- Caching (every key has a value)
- Database indexes
- Deduplication
- Frequency counting

---

### **Set**
**Definition:** Collection of unique values with no duplicates.

**Real-life Example:**
- Guest list for an event (each person appears once)
- Tags on social media posts
- Unique IP addresses visiting your website

**Operations:**
- **Add:** O(1) average
- **Remove:** O(1) average
- **Contains:** O(1) average

**Set Operations:**
- **Union:** All elements from both sets
- **Intersection:** Elements in both sets
- **Difference:** Elements in first but not second

---

## 1.4 ALGORITHMS

### **Sorting Algorithms**

**Bubble Sort**
- **Time:** O(n²) worst, O(n) best
- **Space:** O(1)
- **Stable:** Yes
- How: Repeatedly swap adjacent elements if wrong order
- Real example: Arranging students by height in a line

**Selection Sort**
- **Time:** O(n²) always
- **Space:** O(1)
- **Stable:** No
- How: Find minimum, place at beginning, repeat for rest
- Real example: Picking smallest coin from a pile repeatedly

**Insertion Sort**
- **Time:** O(n²) worst, O(n) best
- **Space:** O(1)
- **Stable:** Yes
- How: Insert each element into sorted portion
- Real example: Sorting playing cards in your hand

**Merge Sort**
- **Time:** O(n log n) always
- **Space:** O(n)
- **Stable:** Yes
- How: Divide into halves, sort recursively, merge
- Real example: Merging two sorted lists into one sorted list

**Quick Sort**
- **Time:** O(n log n) average, O(n²) worst
- **Space:** O(log n)
- **Stable:** No
- How: Choose pivot, partition smaller/larger, recurse
- Real example: Dividing exam scores into better/worse than average

**Heap Sort**
- **Time:** O(n log n) always
- **Space:** O(1)
- **Stable:** No
- How: Build heap, repeatedly remove max element

**Counting Sort** (Non-comparison)
- **Time:** O(n + k) where k is range
- **Space:** O(k)
- When: Small integer range
- Real example: Sorting test scores from 0-100

---

### **Searching Algorithms**

**Linear Search**
- **Time:** O(n)
- When: Small dataset or unsorted
- How: Check each element sequentially

**Binary Search**
- **Time:** O(log n)
- **Prerequisite:** Sorted data
- How: Check middle, eliminate half, repeat
- Real example: Finding a word in dictionary

**Ternary Search**
- **Time:** O(log₃ n)
- How: Divide into 3 parts, eliminate 2/3
- Less used than binary search

---

### **Graph Algorithms**

**Breadth-First Search (BFS)**
- **Time:** O(V + E)
- **Space:** O(V)
- How: Queue-based, explore level by level
- Uses: Shortest path, level-order traversal, social network distance
- Real example: "Degrees of separation" in LinkedIn

**Depth-First Search (DFS)**
- **Time:** O(V + E)
- **Space:** O(V)
- How: Stack-based or recursive, explore deep
- Uses: Topological sort, cycle detection, backtracking
- Real example: Solving a maze (exploring each path completely)

**Dijkstra's Algorithm**
- **Time:** O((V + E) log V) with min-heap
- **Purpose:** Shortest path in weighted graph
- Real example: GPS navigation finding fastest route
- Constraint: No negative edges

**Bellman-Ford Algorithm**
- **Time:** O(V × E)
- **Purpose:** Shortest path with negative edges
- Detects negative cycles
- Real example: Currency arbitrage detection

**Floyd-Warshall Algorithm**
- **Time:** O(V³)
- **Purpose:** All-pairs shortest path
- Real example: Finding all shipping routes with minimum distance

**Kruskal's Algorithm**
- **Purpose:** Minimum Spanning Tree (MST)
- **Time:** O(E log E)
- How: Sort edges by weight, add if no cycle
- Real example: Connecting cities with minimum road length

**Prim's Algorithm**
- **Purpose:** Minimum Spanning Tree
- **Time:** O(V² or (V + E) log V)
- How: Grow tree from starting node
- Real example: Optimal cable network layout

**Topological Sort**
- **Time:** O(V + E)
- **Purpose:** Linear ordering of DAG
- Real example: Course prerequisites, build system dependencies
- Only works on DAGs

---

### **Dynamic Programming (DP)**
**Definition:** Solving complex problems by breaking into subproblems, storing results to avoid recalculation.

**Real-life Example:**
- Planning a road trip to visit cities with minimum distance
- Investment portfolio optimization
- Project scheduling

**Common DP Problems:**

**Fibonacci Sequence**
```
Non-DP (recursive): O(2^n)
  fib(5) = fib(4) + fib(3)
           └─ recalculates fib(3), fib(2), etc.

DP (memoization): O(n)
  Store fib(1)=1, fib(2)=1, fib(3)=2, etc.
  Use stored values instead of recalculating
```

**Longest Common Subsequence (LCS)**
- Compare two strings to find longest matching subsequence
- Real example: DNA sequence comparison, version control diffs

**0/1 Knapsack Problem**
- Pack items with max value without exceeding weight limit
- Real example: Cargo shipping optimization, investment decisions

**Coin Change Problem**
- Find minimum coins for amount
- Real example: Vending machine change calculation

**Approaches:**
- **Top-Down (Memoization):** Solve recursively, cache results
- **Bottom-Up (Tabulation):** Build solution iteratively from base cases

---

### **Greedy Algorithms**
**Definition:** Make locally optimal choice at each step, hoping for global optimum.

**Real-life Example:**
- Activity selection (choose events with least overlap)
- Fractional knapsack (take most valuable items first)
- Huffman coding (build compression tree)
- Job sequencing with deadlines

**Caveat:** Doesn't always give optimal solution, but fast.

---

### **String Algorithms**

**Knuth-Morris-Pratt (KMP)**
- **Purpose:** Pattern matching in string
- **Time:** O(n + m)
- More efficient than brute force checking

**Boyer-Moore Algorithm**
- **Purpose:** Pattern matching
- **Time:** O(n/m) best case
- Often faster than KMP in practice

**Rabin-Karp Algorithm**
- **Purpose:** Pattern matching using hashing
- **Time:** O(n + m) average

---

## 1.5 COMPLEXITY ANALYSIS

### **Big O Notation**
Describes how algorithm performance scales with input size.

**Common Complexities (best to worst):**
- **O(1)** - Constant: Accessing array element by index
- **O(log n)** - Logarithmic: Binary search
- **O(n)** - Linear: Simple loop through all elements
- **O(n log n)** - Linearithmic: Merge sort, quick sort
- **O(n²)** - Quadratic: Nested loops, bubble sort
- **O(n³)** - Cubic: Triple nested loops
- **O(2^n)** - Exponential: Recursive fibonacci
- **O(n!)** - Factorial: Generating all permutations

**Other Notations:**
- **Big Omega (Ω):** Lower bound (best case)
- **Big Theta (Θ):** Tight bound (average case)
- **Little o:** Upper bound (strictly less than)

**Space Complexity:**
Measure of memory used by algorithm
```
Merge Sort: O(n) space for temporary arrays
Bubble Sort: O(1) space (in-place)
```

---

# 2. DATABASE CONCEPTS & TYPES

## 2.1 RELATIONAL DATABASES (SQL)

### **Core Concepts**

**Table/Relation**
- **Definition:** Structured data organized in rows and columns
- **Real example:** ClinchDate users table with columns: id, email, username, age, location

```
Users Table:
| id | email              | username | age | created_at |
|----|--------------------|---------|----|-----------|
| 1  | john@example.com   | john123 | 25 | 2024-01-01|
| 2  | jane@example.com   | jane456 | 23 | 2024-01-02|
```

**Row/Record/Tuple**
- Single entry in table (example: one user)

**Column/Field/Attribute**
- Single property (example: email, age)

**Primary Key**
- **Definition:** Unique identifier for each row
- **Real example:** user_id in users table
- Ensures no duplicate rows
- Used for linking tables

**Foreign Key**
- **Definition:** Column referencing primary key of another table
- **Real example:** user_id in messages table references id in users table
- Maintains referential integrity

**Index**
- **Definition:** Data structure for fast lookups
- Types: B-Tree (default), Hash, Full-text
- **Real example:** Indexing email for fast user lookups
- Trade-off: Faster reads, slower writes, extra storage

---

### **SQL Concepts**

**ACID Properties**

**Atomicity:**
- Transaction is all-or-nothing
- Real example: Money transfer - either both debit and credit happen, or neither

**Consistency:**
- Database moves from valid state to valid state
- Real example: Total money in system stays same after transfer

**Isolation:**
- Concurrent transactions don't interfere
- Real example: Two people checking balance simultaneously get correct values

**Durability:**
- Committed data persists despite failures
- Real example: After transaction confirmed, data survives power failure

---

**Normalization**
- Organizing data to reduce redundancy and improve integrity

**1NF (First Normal Form):**
- All values are atomic (not repeatable groups)
- Real example: Instead of phone column with "555-1234, 555-5678", have separate phone_numbers table

**2NF:**
- In 1NF + Non-key attributes depend on entire primary key
- Remove partial dependencies

**3NF:**
- In 2NF + Non-key attributes depend only on primary key
- Remove transitive dependencies
- Real example: Instead of storing both address and city, store just address_id

**BCNF (Boyce-Codd Normal Form):**
- Stricter version of 3NF
- Every determinant is candidate key

**Denormalization:**
- Intentionally adding redundancy for performance
- Real example: Storing user_name in messages table to avoid join overhead

---

**JOIN Operations**

**INNER JOIN:**
- Returns matching rows from both tables
- Real example: Get users and their orders (only users with orders)

```sql
SELECT users.name, orders.amount
FROM users
INNER JOIN orders ON users.id = orders.user_id;
```

**LEFT JOIN:**
- All rows from left table + matching from right
- Real example: All users and their orders (even if no orders)

**RIGHT JOIN:**
- All rows from right table + matching from left

**FULL OUTER JOIN:**
- All rows from both tables
- Real example: All users and orders, showing nulls for unmatched

**CROSS JOIN:**
- Cartesian product of both tables
- Real example: All combinations of products and colors

**Self Join:**
- Table joins with itself
- Real example: Employee table with manager column (manager is another employee)

---

**Relationships**

**One-to-One (1:1):**
- One row in Table A relates to one row in Table B
- Real example: User has one profile, profile belongs to one user
- Implementation: Foreign key in either table with UNIQUE constraint

**One-to-Many (1:N):**
- One row in Table A relates to many rows in Table B
- Real example: User has many messages, message belongs to one user
- Implementation: Foreign key in "many" table (messages)

**Many-to-Many (N:N):**
- Multiple rows in Table A relate to multiple rows in Table B
- Real example: Users have many interests, interests have many users (like on ClinchDate)
- Implementation: Junction/bridge table with foreign keys to both

```
Users Table          Interests Table      User_Interests Table
┌─────┐              ┌──────┐            ┌────────────┐
│ id  │              │ id   │            │ user_id    │
│ ... │              │ name │            │ interest_id│
└─────┘              └──────┘            └────────────┘
```

---

### **Advanced SQL Concepts**

**Transactions**
- Group of SQL statements executed together
- Either all succeed or all fail (ACID)
- Real example: Bank transfer debit user A, credit user B

```sql
BEGIN TRANSACTION;
  UPDATE users SET balance = balance - 100 WHERE id = 1;
  UPDATE users SET balance = balance + 100 WHERE id = 2;
COMMIT; -- or ROLLBACK;
```

**Views**
- Virtual table based on query result
- Real example: Create view of active users joined in last month
- Benefits: Security (hide columns), simplicity, reusability

**Stored Procedures**
- Pre-compiled SQL code stored in database
- Real example: Procedure to process monthly subscriptions
- Benefits: Performance, security, reusability

**Triggers**
- Automatically execute SQL when event occurs
- Real example: Update updated_at timestamp when row modified
- Events: INSERT, UPDATE, DELETE

**Window Functions**
- Perform calculations across row sets
- Real example: Rank users by match count, calculate running average
- Functions: ROW_NUMBER(), RANK(), LAG(), LEAD()

---

### **Query Optimization**

**Execution Plan**
- How database executes query
- Tools: EXPLAIN (MySQL), ANALYZE (PostgreSQL)
- Look for: Sequential scans (bad), index usage (good)

**Query Hints**
- Suggestions to optimize execution
- Real example: Force index usage for specific table

**Statistics**
- Database gathers table stats
- Uses to choose best execution plan
- Keep updated with ANALYZE command

---

## 2.2 NOSQL DATABASES

### **Document Databases (MongoDB)**

**Core Concept:**
- Store data as JSON-like documents
- Flexible schema (documents can have different structures)

**Real-life Example:**
- ClinchDate storing user profiles with varying optional fields
- Storing product reviews with different attributes per review type

**Document Structure:**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John",
  "email": "john@example.com",
  "interests": ["travel", "music"],
  "address": {
    "street": "123 Main St",
    "city": "NYC"
  }
}
```

**Advantages:**
- Flexible schema
- No joins needed (denormalized)
- Scales horizontally easily
- Fast for unstructured data

**Disadvantages:**
- Higher memory usage
- No ACID across documents (MongoDB 4.0+ has multi-document ACID)
- Potential data redundancy

**Key Concepts:**
- **Collection:** Group of documents (like table)
- **BSON:** Binary JSON format (stores documents)
- **Indexes:** Similar to SQL, improve query performance

**Query Example:**
```js
db.users.find({ age: { $gt: 25 } })
         .sort({ created_at: -1 })
         .limit(10);
```

---

### **Key-Value Stores (Redis)**

**Core Concept:**
- Simple key → value mapping
- In-memory (very fast)
- Data structures: strings, lists, sets, sorted sets, hashes

**Real-life Example:**
- Cache user session data for fast retrieval
- Store real-time chat messages
- Rate limiting: track API calls per user

```
Key: "user:123:profile"
Value: {name: "John", age: 25, ...}

Key: "session:abc123"
Value: {user_id: 123, expires: 1609459200}
```

**Operations:**
```
SET key value           # Store
GET key                # Retrieve
DEL key                # Delete
INCR counter           # Increment
LPUSH list value       # Add to list
SADD set member        # Add to set
```

**Advantages:**
- Extremely fast (in-memory)
- Simple to use
- Atomic operations
- Pub/Sub for messaging
- Expiration (automatic cleanup)

**Disadvantages:**
- Not persistent (by default, though RDB/AOF available)
- Limited memory (expensive to store lots of data)
- Lost on restart

**Use Cases:**
- Session storage
- Real-time leaderboards
- Rate limiting
- Job queues
- Caching layer
- Real-time notifications

---

### **Column-Family Stores (Cassandra, HBase)**

**Core Concept:**
- Data organized by column families instead of rows
- Optimized for storing large amounts of sparse data

**Real-life Example:**
- Time-series data (sensor readings, stock prices)
- Event logging with variable attributes

```
Row Key: "user:123"
├─ profile:name = "John"
├─ profile:age = "25"
├─ settings:notifications = "true"
└─ settings:theme = "dark"
```

**Advantages:**
- Excellent for time-series data
- Highly distributed
- Good compression (many nulls)
- Scales horizontally extremely well

**Disadvantages:**
- Complex to use
- Eventual consistency (not ACID)
- Slower than key-value stores

---

### **Search Engines (Elasticsearch)**

**Core Concept:**
- Distributed search and analytics engine
- Built on Lucene
- Stores data as JSON documents

**Real-life Example:**
- Full-text search on ClinchDate (find users by interest, location, bio)
- Product search on e-commerce sites
- Log analysis and monitoring

**Key Features:**
- Full-text search with ranking
- Faceted search (filter by multiple criteria)
- Real-time analytics
- Automatic indexing

**Query Example:**
```json
{
  "query": {
    "bool": {
      "must": [
        {"match": {"interests": "travel"}},
        {"range": {"age": {"gte": 25}}}
      ]
    }
  }
}
```

---

### **Graph Databases (Neo4j)**

**Core Concept:**
- Store data as nodes and relationships
- Optimized for traversing relationships

**Real-life Example:**
- Social networks (find friends of friends)
- Recommendation engines (people who liked X also liked Y)
- Knowledge graphs
- ClinchDate match suggestions based on common interests

**Structure:**
```
(User {name: "John"}) -[FOLLOWS]-> (User {name: "Jane"})
     |
     ├─ [LIKES] -> (Interest {name: "Travel"})
     └─ [LIKES] -> (Interest {name: "Music"})
```

**Query Example (Cypher):**
```cypher
MATCH (user:User {id: 123})-[r:LIKES]->(interest:Interest)
RETURN interest.name;

// Find friends of friends
MATCH (user:User {id: 123})-[:FRIENDS]->()-[:FRIENDS]->(fof)
RETURN fof.name;
```

**Advantages:**
- Extremely fast relationship queries
- Intuitive for connected data
- Great for recommendations

**Disadvantages:**
- Overkill for non-connected data
- Higher memory usage
- Smaller ecosystem than relational DBs

---

## 2.3 DATABASE PATTERNS & CONCEPTS

**Sharding (Horizontal Partitioning)**
- Split data across multiple databases/servers
- **Real example:** User data sharded by user_id range (1-1M on server 1, 1M-2M on server 2)
- **Trade-off:** Scalability vs. complexity, potential hotspots

**Replication**
- Copy data across multiple nodes
- **Master-Slave:** One master (writes), multiple slaves (read replicas)
- **Peer-to-Peer:** All nodes equal
- **Real example:** ClinchDate having read replicas for searching users, master for writing new matches

**Consistency Models**

**Eventual Consistency:**
- Data eventually becomes consistent
- Faster writes, temporary inconsistencies
- Real example: Replicated cache eventually syncs with main database

**Strong Consistency:**
- All nodes always see same data
- Slower, but guaranteed correctness
- Real example: Banking transactions

**Pagination**
- Return large result sets in chunks
- Prevents loading millions of rows at once
- Methods: Offset-based, Cursor-based

```sql
SELECT * FROM users LIMIT 10 OFFSET 20;  -- Skip 20, get 10
```

---

# 3. FRONTEND TERMINOLOGY

## 3.1 CORE WEB CONCEPTS

**DOM (Document Object Model)**
- **Definition:** Tree representation of HTML structure
- **Real example:** Browser's understanding of webpage structure
- Every element is a node that can be accessed/modified

```
window
└── document
    └── html
        ├── head
        │   └── title
        └── body
            ├── div (class="container")
            │   └── p
            └── nav
```

**Virtual DOM (React)**
- **Definition:** In-memory copy of actual DOM
- **Purpose:** Efficient updates by comparing changes
- **Process:**
  1. Create virtual representation
  2. Calculate differences (diffing)
  3. Update only changed parts (patching)
  4. Update actual DOM

**Real example:** When you like a post on ClinchDate, React updates the like count in memory, compares with previous, updates only the counter element.

**Rendering**
- Process of converting HTML/CSS/JS to visual output on screen
- **Critical Rendering Path:**
  1. Fetch HTML
  2. Parse HTML (build DOM)
  3. Fetch CSS, images
  4. Parse CSS (build CSSOM)
  5. Combine DOM + CSSOM = Render Tree
  6. Layout (calculate positions)
  7. Paint (draw pixels)
  8. Composite (combine layers)

---

## 3.2 JAVASCRIPT CONCEPTS

**Event Loop**
- **Definition:** Mechanism handling async operations
- **Real example:** Click handler executes after animation finishes

**Components:**
1. **Call Stack:** Tracks function calls
2. **Web API:** Browser APIs (setTimeout, fetch, events)
3. **Task Queue (Callback Queue):** Callbacks from async operations
4. **Microtask Queue:** Promises, queueMicrotask
5. **Event Loop:** Monitors stack, queues

**Execution Order:**
```javascript
console.log('1'); // Synchronous - logs immediately

setTimeout(() => {
  console.log('2'); // Macro task - queued
}, 0);

Promise.resolve()
  .then(() => {
    console.log('3'); // Micro task - executes before macro
  });

console.log('4'); // Synchronous - logs immediately

// Output: 1, 4, 3, 2
```

**Explanation:** Sync code executes first, then microtasks (promises), then macrotasks (setTimeout).

---

**Closures**
- **Definition:** Function with access to variables from outer scope
- **Real example:**
```javascript
function createCounter() {
  let count = 0;
  return {
    increment: () => count++,
    get: () => count
  };
}

const counter = createCounter();
counter.increment(); // count is remembered in closure
console.log(counter.get()); // 1
```

**Use Cases:**
- Data encapsulation/privacy
- Function factories
- Event handlers with context

---

**Hoisting**
- **Definition:** Moving declarations to top of scope
- Variables and functions moved to top before execution
- **var vs let/const:**
  - `var`: Hoisted and initialized with undefined
  - `let/const`: Hoisted but not initialized (Temporal Dead Zone)

```javascript
console.log(x); // undefined (hoisted)
var x = 5;

console.log(y); // ReferenceError
let y = 5;
```

---

**Prototype & Prototypal Inheritance**
- **Definition:** Objects inherit properties from prototype
- **Real example:**
```javascript
function User(name) {
  this.name = name;
}

User.prototype.greet = function() {
  return `Hello, ${this.name}`;
};

const user = new User('John');
user.greet(); // Uses prototype method
```

**Prototype Chain:** Lookup chain for properties
```
instance → User.prototype → Object.prototype → null
```

---

**This Binding**
- **Definition:** Reference to object method belongs to
- **Context Matters:**

```javascript
const user = {
  name: 'John',
  greet: function() {
    console.log(this.name); // 'John'
  }
};

const greet = user.greet;
greet(); // undefined (this is window/global)

const boundGreet = user.greet.bind(user);
boundGreet(); // 'John'
```

**Methods to control this:**
- `.call(obj)`: Invoke immediately
- `.apply(obj, [args])`: Invoke immediately with array args
- `.bind(obj)`: Return new function with bound context

---

**Async/Await**
- **Definition:** Syntax for handling async operations
- **Real example:**
```javascript
async function fetchUser(id) {
  try {
    const response = await fetch(`/users/${id}`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Failed to fetch:', error);
  }
}

// Usage
const user = await fetchUser(123);
```

**Benefits over callbacks/promises:**
- Reads like synchronous code
- Clearer error handling with try/catch
- Easier debugging

---

## 3.3 REACT CONCEPTS

**Components**
- **Definition:** Reusable UI pieces
- **Types:**
  - **Functional:** JavaScript function returning JSX
  - **Class:** ES6 class extending React.Component

```jsx
// Functional Component
function UserCard({ user }) {
  return <div>{user.name}</div>;
}

// Class Component
class UserCard extends React.Component {
  render() {
    return <div>{this.props.user.name}</div>;
  }
}
```

---

**JSX**
- **Definition:** Syntax extension allowing HTML in JavaScript
- **Compiles to:**
```javascript
// JSX
<UserCard name="John" />

// Compiled to
React.createElement(UserCard, { name: "John" })
```

---

**Props (Properties)**
- **Definition:** Data passed to component from parent
- **Characteristics:** Read-only, immutable
- **Real example:**
```jsx
<UserProfile userId={123} showEmail={true} />

function UserProfile({ userId, showEmail }) {
  // Use props
  return <div>User: {userId}</div>;
}
```

---

**State**
- **Definition:** Component's own data, can change
- **Hook:** `useState`
- **Real example:**
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

---

**Lifecycle & Hooks**

**Class Component Lifecycle:**
- **Mount:** `constructor` → `render` → `componentDidMount`
- **Update:** `setState` → `render` → `componentDidUpdate`
- **Unmount:** `componentWillUnmount`

**Functional Hooks:**
- **useState:** Manage state
- **useEffect:** Side effects (fetch, subscriptions, timers)
- **useContext:** Access context
- **useReducer:** Complex state logic
- **useCallback:** Memoize function
- **useMemo:** Memoize value
- **useRef:** Persist value across renders

**useEffect Example:**
```jsx
useEffect(() => {
  // Fetch user on mount
  fetchUser(userId);
  
  // Cleanup function (called on unmount)
  return () => {
    cancelFetch();
  };
}, [userId]); // Re-run when userId changes
```

---

**Controlled vs Uncontrolled Components**

**Controlled:**
- State manages form input value
- More predictable
```jsx
const [email, setEmail] = useState('');
<input value={email} onChange={e => setEmail(e.target.value)} />
```

**Uncontrolled:**
- DOM manages input value
- Uses refs to access value
```jsx
const emailRef = useRef();
<input ref={emailRef} />
// Access: emailRef.current.value
```

---

**Context API**
- **Definition:** Pass data through component tree without prop drilling
- **Real example:** Theme, authentication state
```jsx
const UserContext = React.createContext();

<UserContext.Provider value={user}>
  <Header />
  <Main />
  <Footer />
</UserContext.Provider>

// In descendant
const user = useContext(UserContext);
```

---

**Reconciliation (React Diffing)**
- **Definition:** Algorithm determining which DOM elements to update
- **Process:**
  1. Render new component tree
  2. Compare with previous tree
  3. Identify differences
  4. Update only changed parts

**Key Prop:**
- Important for lists
- Helps React identify which items changed
```jsx
{users.map(user => <UserCard key={user.id} user={user} />)}
```

---

## 3.4 STATE MANAGEMENT

**Redux**
- **Definition:** Centralized state management
- **Architecture:**
  - **Store:** Single source of truth
  - **Actions:** Events (e.g., USER_LOGIN)
  - **Reducers:** Pure functions changing state

```javascript
// Action
const loginAction = { type: 'USER_LOGIN', payload: user };

// Reducer
function authReducer(state = {}, action) {
  if (action.type === 'USER_LOGIN') {
    return { ...state, user: action.payload };
  }
  return state;
}

// Store
const store = createStore(authReducer);
```

**Benefits:** Predictable state, time-travel debugging, middleware support

---

**Context + useReducer**
- Lighter alternative to Redux
- Good for smaller apps
```jsx
const [state, dispatch] = useReducer(reducer, initialState);
dispatch({ type: 'ACTION', payload: data });
```

---

## 3.5 STYLING

**CSS-in-JS**
- **Definition:** Writing CSS in JavaScript
- **Libraries:** Styled-components, Emotion, CSS modules
- **Real example:**
```javascript
const StyledButton = styled.button`
  background: blue;
  color: white;
  padding: 10px;
`;

<StyledButton>Click me</StyledButton>
```

**BEM (Block Element Modifier)**
- Naming convention for CSS classes
```css
.block { }
.block__element { }
.block--modifier { }

/* Example */
.user-card { }
.user-card__name { }
.user-card--active { }
```

---

## 3.6 PERFORMANCE OPTIMIZATION

**Code Splitting**
- **Definition:** Breaking app into chunks loaded on demand
- **Real example:** Load user profile page code only when navigating to it
- **Tools:** Webpack, dynamic import()

```javascript
const UserProfile = React.lazy(() => import('./UserProfile'));
```

**Lazy Loading**
- **Definition:** Loading resources when needed
- **Real example:** Load images as you scroll on ClinchDate profiles
- **Implementation:** Intersection Observer API

**Minification**
- **Definition:** Removing unnecessary characters from code
- **Before:** `const user = { name: "John", age: 25 };`
- **After:** `const u={n:"J",a:25};`

**Tree Shaking**
- Remove unused code from bundle
- Requires ES6 modules
- **Example:** Importing one function from library, unused functions stripped

---

# 4. BACKEND & API TERMINOLOGY

## 4.1 API CONCEPTS

**REST (Representational State Transfer)**
- **Definition:** Architectural style for APIs using HTTP
- **Principles:**
  - Client-Server architecture
  - Stateless (no session stored on server)
  - Uniform interface (resources identified by URLs)
  - Cacheable responses

**RESTful Endpoints:**
```
GET    /users              → List all users
GET    /users/123          → Get user 123
POST   /users              → Create new user
PUT    /users/123          → Update user 123
DELETE /users/123          → Delete user 123
PATCH  /users/123          → Partial update
```

**Real example (ClinchDate):**
```
POST   /api/users/login                    → Login
GET    /api/users/123/matches              → Get matches
POST   /api/matches/456/like               → Like match
POST   /api/messages                       → Send message
GET    /api/messages?user_id=123           → Get messages
```

---

**GraphQL**
- **Definition:** Query language for APIs
- **Advantages over REST:**
  - Request only needed fields (no over-fetching)
  - Get related data in one request (no under-fetching)
  - Single endpoint
  - Strong typing

**Example Query:**
```graphql
query {
  user(id: 123) {
    name
    email
    matches {
      id
      name
      interests
    }
  }
}
```

**vs REST equivalent:**
```
GET /users/123 → Returns all user fields
GET /users/123/matches → Returns all match fields
```

---

**HTTP Methods**
- **GET:** Retrieve data (idempotent, cacheable)
- **POST:** Create data (not idempotent)
- **PUT:** Replace entire resource (idempotent)
- **PATCH:** Partial update (idempotent)
- **DELETE:** Remove data (idempotent)

**Idempotent:** Multiple calls have same effect as single call
- Real example: PUT /users/123 called 5 times = same as once

---

**Status Codes**
- **2xx Success:**
  - 200 OK: Request succeeded
  - 201 Created: Resource created
  - 204 No Content: Success, no response body

- **3xx Redirection:**
  - 301 Moved Permanently
  - 302 Found (temporary redirect)
  - 304 Not Modified: Use cached version

- **4xx Client Error:**
  - 400 Bad Request: Invalid data
  - 401 Unauthorized: Not authenticated
  - 403 Forbidden: Authenticated but no permission
  - 404 Not Found: Resource doesn't exist
  - 429 Too Many Requests: Rate limited

- **5xx Server Error:**
  - 500 Internal Server Error
  - 502 Bad Gateway
  - 503 Service Unavailable

---

**Request/Response Structure**

**Request:**
```
GET /api/users/123 HTTP/1.1
Host: api.example.com
Authorization: Bearer token123
Content-Type: application/json

{
  "filter": "active"
}
```

**Response:**
```
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: max-age=3600

{
  "id": 123,
  "name": "John",
  "email": "john@example.com"
}
```

---

**Authentication & Authorization**

**Basic Auth:**
- Username:password encoded in Base64
- Sent in Authorization header
- Simple but insecure over HTTP

**Bearer Token:**
- Token in Authorization header
- Real example: `Authorization: Bearer eyJhbGc...`
- Common with OAuth2, JWT

**API Key:**
- Simple key in header or query param
- Real example: `X-API-Key: abc123xyz`
- Easy but less secure

**OAuth2:**
- Delegated authorization
- Real example: "Login with Google/Facebook"
- User logs in with provider, app gets token
- Flow: Redirect → User logs in → Consent → Redirect with code → Exchange for token

**JWT (JSON Web Token):**
- Self-contained token with claims
- **Structure:** Header.Payload.Signature
- **Real example:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjMiLCJuYW1lIjoiSm9obiJ9.
dozjgNryP4J3jVmNHl0w5N_XgL0n3I9PlFUP0THsR8U
```
- **Advantage:** Stateless (no server storage), can verify without database
- **Disadvantage:** Revocation hard (token valid until expiry)

---

## 4.2 BACKEND PATTERNS

**MVC (Model-View-Controller)**
- **Model:** Data and business logic
- **View:** User interface
- **Controller:** Handles input, orchestrates model/view
- Real example: Laravel application structure

**MVVM (Model-View-ViewModel)**
- **ViewModel:** Transforms model data for view
- Real example: React components with local state

**Service-Oriented Architecture (SOA)**
- Applications as collection of loosely-coupled services
- Services communicate via APIs
- Real example: ClinchDate with separate services for dating, messaging, payments

---

**Monolithic Architecture**
- Single large application
- Advantages: Simple to develop initially, easier debugging
- Disadvantages: Hard to scale, tech lock-in, deployment coupling
- Real example: All features in one Node.js app

**Microservices Architecture**
- Application split into small, independent services
- Each service: separate database, separate deployment
- Real example: ClinchDate split into:
  - User service
  - Matching service
  - Messaging service
  - Payment service

**Advantages:** Independent scaling, technology flexibility, failure isolation
**Disadvantages:** Complexity, network latency, distributed tracing

---

**Middleware**
- **Definition:** Function that has access to request/response objects
- **Real example (Express):**
```javascript
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next(); // Pass to next middleware
});

app.use(authenticate); // Check authentication
```

**Common Middleware:**
- Logging
- Authentication
- Validation
- Error handling
- Rate limiting
- CORS

---

## 4.3 DATABASE INTEGRATION

**ORM (Object-Relational Mapping)**
- **Definition:** Abstraction allowing interact with database using objects
- **Real example (TypeORM):**
```typescript
@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;
}

const user = await User.findOne(123);
user.email = 'newemail@example.com';
await user.save();
```

**Advantages:** Less SQL, type safety, built-in features
**Disadvantages:** Performance overhead, less control, complex queries hard

**Query Builders:**
- Chainable API for building queries
```typescript
const users = await db.select('*')
  .from('users')
  .where('age', '>', 25)
  .orderBy('name');
```

**Migrations:**
- Version control for database schema
- Allows reproducible database changes
```javascript
createTable('users', (t) => {
  t.increments('id');
  t.string('email').unique();
  t.timestamps();
});
```

---

## 4.4 CACHING

**HTTP Caching**
- **Cache-Control Headers:**
```
Cache-Control: max-age=3600          // Cache for 1 hour
Cache-Control: no-cache              // Validate with server
Cache-Control: no-store              // Never cache
Cache-Control: public                // Cacheable by anyone
Cache-Control: private               // Cacheable by browser only
ETag: "hash123"                      // Unique identifier
If-None-Match: "hash123"             // Returns 304 if match
```

**Real example:** ClinchDate user profile cached for 1 hour

---

**Application Caching**
- **In-Memory Cache (Redis):**
```javascript
const user = await redis.get(`user:${id}`);
if (!user) {
  user = await database.getUserById(id);
  await redis.setex(`user:${id}`, 3600, JSON.stringify(user));
}
```

**Cache Patterns:**
- **Cache-Aside:** Check cache, if miss fetch from database
- **Write-Through:** Write to cache and database together
- **Write-Behind:** Write to cache, later to database

**Cache Invalidation:**
- **TTL (Time To Live):** Automatically expire after duration
- **LRU (Least Recently Used):** Remove least recently used item
- **Manual:** Explicitly invalidate when data changes

---

# 5. SYSTEM ARCHITECTURE & DESIGN PATTERNS

## 5.1 DESIGN PATTERNS

**Creational Patterns** (Object creation)

**Singleton:**
- Only one instance of class
- Real example: Database connection, logger
```javascript
class Logger {
  static instance = null;
  
  static getInstance() {
    if (!this.instance) {
      this.instance = new Logger();
    }
    return this.instance;
  }
}
```

**Factory:**
- Create objects without specifying exact classes
- Real example: Different payment processor classes
```javascript
const paymentProcessor = PaymentFactory.create('stripe');
const paymentProcessor = PaymentFactory.create('paypal');
```

**Builder:**
- Construct complex object step by step
- Real example: Query builder
```javascript
const query = new QueryBuilder()
  .select(['id', 'name'])
  .from('users')
  .where('age > 25')
  .orderBy('name')
  .build();
```

---

**Structural Patterns** (Object composition)

**Adapter:**
- Convert interface to expected format
- Real example: Adapter for different payment APIs
```javascript
class StripeAdapter {
  pay(amount) {
    // Convert to Stripe format
    return stripe.charge(amount * 100);
  }
}
```

**Decorator:**
- Add functionality to object without modifying
- Real example: Caching decorator
```javascript
const cachedGetUser = cacheDecorator(getUser, 3600);
```

**Proxy:**
- Control access to another object
- Real example: Lazy loading, access control

**Facade:**
- Simplified interface to complex subsystem
- Real example: Payment facade handling multiple processors

---

**Behavioral Patterns** (Object interaction)

**Observer (Pub-Sub):**
- Objects notify subscribers of state changes
- Real example: Event emission
```javascript
emitter.on('user:created', (user) => {
  sendWelcomeEmail(user);
});

emitter.emit('user:created', newUser);
```

**Strategy:**
- Encapsulate interchangeable behaviors
- Real example: Different sorting strategies
```javascript
function sort(array, strategy) {
  return strategy.sort(array);
}
```

**Command:**
- Encapsulate request as object
- Real example: Task queue
```javascript
queue.push(new SendEmailCommand(user));
```

**State:**
- Object changes behavior based on state
- Real example: Order workflow (pending → shipped → delivered)

---

## 5.2 ARCHITECTURAL PATTERNS

**Layered Architecture:**
```
┌─────────────────────────┐
│   Presentation Layer    │
├─────────────────────────┤
│   Application Layer     │
├─────────────────────────┤
│   Business Logic Layer  │
├─────────────────────────┤
│   Data Access Layer     │
├─────────────────────────┤
│   Database              │
└─────────────────────────┘
```

- **Presentation:** Controllers, views, API
- **Application:** Orchestration, validation
- **Business:** Core logic, calculations
- **Data Access:** Database queries, caching

---

**Hexagonal Architecture (Ports & Adapters):**
- Core application isolated from external systems
- **Real example:**
```
         Ports (Interfaces)
         ↓
Core Logic (User service)
    ↓
  Adapters (Express, MongoDB, Email)
```

**Benefits:** Easy to test, technology agnostic, flexible

---

**CQRS (Command Query Responsibility Segregation):**
- Separate read and write operations
- **Command:** Modifies state (Write model)
- **Query:** Retrieves state (Read model)
- Real example: Event sourcing with separate read replicas

---

## 5.3 SCALABILITY

**Horizontal Scaling:**
- Add more servers
- Load distributed across servers
- **Real example:** Multiple ClinchDate API servers behind load balancer

```
            ┌─ Server 1
Load Balancer ─ Server 2
            └─ Server 3
```

**Vertical Scaling:**
- More powerful server (more CPU, RAM)
- Simpler but expensive
- Single point of failure

---

**Load Balancing:**
- Distribute requests across servers
- **Algorithms:**
  - **Round Robin:** Next server in sequence
  - **Least Connections:** Server with fewest active connections
  - **IP Hash:** Same IP always to same server
  - **Weighted:** Stronger servers get more requests

**Real example (nginx):**
```nginx
upstream backend {
  server api1.example.com;
  server api2.example.com;
  server api3.example.com;
}
```

---

**Database Scaling:**

**Read Replicas:**
- Master database for writes
- Replicas for reads
- Real example: ClinchDate reads from replicas for searching, writes to master

**Caching Layer:**
- Redis/Memcached between app and database
- Reduces database load
- Real example: User profiles cached after first access

**Database Sharding:**
- Split data across databases
- Real example: Users 1-1M on shard 1, 1M-2M on shard 2

---

# 6. DEVOPS & INFRASTRUCTURE

## 6.1 DEPLOYMENT & CONTAINERS

**Docker**
- **Definition:** Containerization platform packaging application with dependencies
- **Real example:** ClinchDate app, Node.js, dependencies in one container

**Dockerfile:**
```dockerfile
FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

**Benefits:**
- Consistency (works on dev, staging, production)
- Isolation (app doesn't affect others)
- Easy deployment and scaling

---

**Docker Compose**
- **Definition:** Multi-container orchestration
- **Real example:**
```yaml
services:
  api:
    build: .
    ports:
      - "3000:3000"
  db:
    image: mongo
    ports:
      - "27017:27017"
  redis:
    image: redis
```

**Use Case:** Local development with dependencies

---

**Kubernetes (K8s)**
- **Definition:** Container orchestration platform
- **Features:**
  - Auto-scaling
  - Load balancing
  - Service discovery
  - Self-healing (restart failed containers)
  - Rolling updates

**Architecture:**
```
Master Node (Control Plane)
  ├─ API Server
  ├─ Scheduler
  ├─ Controller Manager

Worker Nodes
  ├─ Kubelet
  ├─ Container Runtime
  └─ Pods (Containers)
```

**Real example:** ClinchDate deployed on Kubernetes with auto-scaling based on load

---

## 6.2 CI/CD

**CI (Continuous Integration):**
- Automatically build and test code on every push
- Catch issues early
- **Real example:**
  1. Developer pushes code
  2. GitHub Actions runs tests
  3. If tests pass, code merged

**CD (Continuous Deployment/Delivery):**
- **Deployment:** Automatically deploy to production
- **Delivery:** Automatically deploy to staging, manual to production

**CI/CD Pipeline:**
```
Code Push → Build → Test → Lint → Deploy Staging → Deploy Production
```

**Tools:** GitHub Actions, GitLab CI, Jenkins, CircleCI

**Example GitHub Actions:**
```yaml
name: Test and Deploy
on: [push]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm install
      - run: npm test
```

---

## 6.3 MONITORING & LOGGING

**Logging**
- Recording application events
- **Levels:**
  - DEBUG: Detailed info
  - INFO: General info
  - WARN: Warning message
  - ERROR: Error occurred
  - FATAL: Critical error

**Real example (Winston):**
```javascript
logger.info('User logged in', { userId: 123 });
logger.error('Payment failed', { error: err.message });
```

**ELK Stack (Elasticsearch, Logstash, Kibana):**
- Logstash: Collect and parse logs
- Elasticsearch: Store and index logs
- Kibana: Visualize logs
- Real example: Search all errors from last hour across all servers

---

**Monitoring:**
- Tracking application health and performance
- **Metrics:**
  - CPU usage
  - Memory usage
  - Request latency
  - Error rate
  - Requests per second

**Tools:** Prometheus, Grafana, Datadog

**Alerting:**
- Notify on anomalies
- Real example: Alert if error rate > 5%

---

**Distributed Tracing:**
- Track request across services
- Real example (Jaeger):
  ```
  Client Request
    → API Gateway (5ms)
    → User Service (10ms)
    → Database (20ms)
  ```
- Helps identify performance bottlenecks in microservices

---

## 6.4 INFRASTRUCTURE AS CODE

**Definition:** Managing infrastructure through code instead of manual configuration

**IaC Tools:**
- **Terraform:** Cloud-agnostic
- **AWS CloudFormation:** AWS-specific
- **Ansible:** Configuration management

**Real example (Terraform):**
```hcl
resource "aws_instance" "api_server" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t2.micro"
  
  tags = {
    Name = "ClinchDate API"
  }
}
```

**Benefits:**
- Version control for infrastructure
- Reproducibility
- Automation
- Consistency across environments

---

# 7. WEB & NETWORK CONCEPTS

## 7.1 HTTP & PROTOCOLS

**HTTP/1.1:**
- **Persistent Connection:** Reuse TCP connection
- **Pipelining:** Send multiple requests before responses
- **Headers:** Large (repeated with each request)

**HTTP/2:**
- **Multiplexing:** Multiple requests on one connection
- **Binary Framing:** Faster parsing
- **Header Compression:** Smaller headers
- **Server Push:** Proactively send resources

**HTTP/3:**
- Uses QUIC protocol (UDP-based)
- Faster connections
- Better on mobile (connection migration)

---

**HTTPS/TLS:**
- **Encryption:** Data encrypted in transit
- **Authentication:** Verify server identity
- **Integrity:** Detect tampering

**SSL Certificate Chain:**
```
Root CA (trusted by browser)
  ↓
Intermediate CA
  ↓
Your Domain Certificate
```

---

## 7.2 DNS

**Definition:** Domain Name System translates domain to IP address

**Real example:** typing example.com → DNS lookup → returns 192.0.2.1

**DNS Records:**
- **A:** Domain to IPv4 address
- **AAAA:** Domain to IPv6 address
- **CNAME:** Alias to another domain
- **MX:** Mail server
- **TXT:** Text records (SPF, DKIM, etc.)
- **NS:** Name server

**Resolution Process:**
```
1. Browser cache → Check
2. OS cache → Check
3. Resolver → Check
4. Root nameserver → Direct to TLD
5. TLD nameserver → Direct to authoritative
6. Authoritative nameserver → Return IP
7. Response cached at each level
```

---

## 7.3 NETWORKING CONCEPTS

**TCP (Transmission Control Protocol):**
- **Reliable delivery:** All packets arrive
- **Ordered:** Packets in correct order
- **Connection-oriented:** Establish connection first
- **Slower but guaranteed**
- Real example: HTTP, Email, FTP

**UDP (User Datagram Protocol):**
- **Unreliable:** Some packets might be lost
- **Connectionless:** No setup
- **Fast:** No overhead
- Real example: Video streaming, gaming, DNS

**TCP Three-Way Handshake:**
```
Client → Server: SYN (I want to connect)
Server → Client: SYN-ACK (OK, let's connect)
Client → Server: ACK (Connection established)
```

---

**IP Addressing:**
- **IPv4:** 192.168.1.1 (32 bits, ~4 billion addresses)
- **IPv6:** 2001:0db8:85a3::8a2e:0370:7334 (128 bits, ~340 undecillion)

**CIDR Notation:**
- 192.168.1.0/24 means:
  - Network: 192.168.1.0
  - Mask: 255.255.255.0
  - 254 usable addresses (1-254)

---

**Ports:**
- Virtual endpoints for communication
- **Well-known:**
  - 80: HTTP
  - 443: HTTPS
  - 22: SSH
  - 3306: MySQL
  - 5432: PostgreSQL
  - 6379: Redis
  - 27017: MongoDB

---

## 7.4 WEB SECURITY

**CORS (Cross-Origin Resource Sharing):**
- **Definition:** Allow cross-domain requests
- **Real example:** Frontend on example.com requests API from api.example.com
- **Headers:**
```
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: GET, POST
Access-Control-Allow-Headers: Content-Type
```

**CSRF (Cross-Site Request Forgery):**
- Attacker tricks user to perform action
- **Protection:** CSRF tokens, SameSite cookies

**XSS (Cross-Site Scripting):**
- Inject malicious JavaScript
- **Protection:** Sanitize input, Content Security Policy

**SQL Injection:**
- Inject SQL through input
```sql
SELECT * FROM users WHERE email = 'a@b.com'; DROP TABLE users;--'
```
- **Protection:** Prepared statements, ORM

**Security Headers:**
```
X-Frame-Options: DENY                    # Prevent clickjacking
X-Content-Type-Options: nosniff          # Prevent MIME type sniffing
Content-Security-Policy: ...             # Whitelist resources
Strict-Transport-Security: max-age=31536000  # Force HTTPS
```

---

# 8. TESTING & QUALITY ASSURANCE

## 8.1 TESTING TYPES

**Unit Testing**
- **Definition:** Testing individual functions/methods
- **Tool:** Jest, Mocha, Vitest
- **Real example:**
```javascript
describe('User service', () => {
  it('should create user with valid email', () => {
    const user = createUser('john@example.com');
    expect(user.email).toBe('john@example.com');
  });
});
```

---

**Integration Testing**
- **Definition:** Testing components working together
- **Real example:** API endpoint calling database
```javascript
it('should save user to database', async () => {
  const response = await request(app)
    .post('/api/users')
    .send({ email: 'john@example.com' });
  
  expect(response.status).toBe(201);
  const user = await User.findOne({ email: 'john@example.com' });
  expect(user).toBeDefined();
});
```

---

**End-to-End (E2E) Testing**
- **Definition:** Testing full user workflows
- **Tool:** Cypress, Selenium, Playwright
- **Real example:** User signup → verify email → login → create profile
```javascript
it('should allow user to sign up and login', () => {
  cy.visit('http://localhost:3000');
  cy.get('input[name="email"]').type('john@example.com');
  cy.get('button[type="submit"]').click();
  cy.contains('Welcome, John!');
});
```

---

**Performance Testing**
- **Definition:** Testing speed and load capacity
- **Tools:** JMeter, LoadRunner, k6
- **Real example:** Simulate 1000 concurrent users

**Load Testing:** How system performs under load
**Stress Testing:** How system fails under extreme load
**Endurance Testing:** Long-running performance

---

## 8.2 TESTING METRICS

**Code Coverage**
- Percentage of code tested
- **Types:**
  - Line coverage: % of lines executed
  - Branch coverage: % of conditions tested
  - Function coverage: % of functions tested

**Target:** 80%+ for critical paths

---

**Test Pyramid:**
```
        /\
       /E2E\           Few expensive tests
      /----\
     / Integ\          Medium speed tests
    /-------\
   / Unit   \          Many fast tests
  /--------/
```

---

# 9. SECURITY TERMINOLOGY

## 9.1 AUTHENTICATION & ENCRYPTION

**Hashing**
- **Definition:** One-way function converting input to fixed-size string
- **Real example:** Storing passwords
```javascript
const hash = bcrypt.hash('password123', 10);
// $2b$10$7J3GU.tSGlagyb0kPmC0.uu9Gd5d5B... (irreversible)
```

**Salting:**
- Adding random value before hashing
- Prevents rainbow tables
- Bcrypt includes salt automatically

**Hashing Algorithms:**
- **MD5/SHA1:** Outdated, vulnerable (used for checksums only)
- **SHA256:** Still used but slow
- **bcrypt:** Designed for passwords (has built-in salt, slow)
- **Argon2:** Most secure, recommended

---

**Encryption**
- **Definition:** Reversible transformation using key
- **Types:**
  - **Symmetric:** Same key for encrypt/decrypt (fast, must keep secret)
  - **Asymmetric:** Public key to encrypt, private key to decrypt (slow, safe sharing)

**Real example (symmetric):**
```javascript
const encrypted = crypto.encrypt(plaintext, key);
const plaintext = crypto.decrypt(encrypted, key);
```

**Real example (asymmetric):**
```
Person A: Encrypt with B's public key → Only B can decrypt with private key
```

---

## 9.2 COMMON ATTACKS & PROTECTION

**Man-in-the-Middle (MITM):**
- Attacker intercepts communication
- **Protection:** HTTPS, certificate pinning

**DDoS (Distributed Denial of Service):**
- Flood server with requests
- **Protection:** Rate limiting, WAF, CDN

**Brute Force:**
- Try many password combinations
- **Protection:** Rate limiting, account lockout, strong passwords

**Replay Attack:**
- Attacker repeats valid request
- **Protection:** Timestamps, nonces, tokens

---

# 10. PERFORMANCE OPTIMIZATION

## 10.1 FRONTEND OPTIMIZATION

**Image Optimization:**
- **Formats:** WebP (smallest), JPEG (photos), PNG (graphics)
- **Responsive:** Serve different sizes for different devices
- **Lazy Loading:** Load on scroll
```html
<img src="image.jpg" loading="lazy" />
```

**CSS Optimization:**
- **Critical CSS:** Inline CSS for above-fold content
- **Minification:** Remove whitespace
- **Unused CSS:** Remove unused rules

**JavaScript Optimization:**
- **Code Splitting:** Load only needed code
- **Minification:** Reduce file size
- **Async/Defer:**
  - `async`: Download in parallel, execute when ready (blocks rendering)
  - `defer`: Download in parallel, execute after HTML parsing (non-blocking)

```html
<script src="app.js" async></script>     <!-- Blocks rendering -->
<script src="app.js" defer></script>     <!-- Non-blocking -->
```

---

**Rendering Optimization:**
- **Avoid Layout Thrashing:** Batch DOM reads/writes
```javascript
// Bad: Multiple reflows
for (let i = 0; i < elements.length; i++) {
  elements[i].style.width = elements[i].offsetWidth + 10 + 'px';
}

// Good: Batch reads then writes
const widths = elements.map(el => el.offsetWidth);
widths.forEach((w, i) => {
  elements[i].style.width = w + 10 + 'px';
});
```

---

## 10.2 BACKEND OPTIMIZATION

**Database Query Optimization:**
- **Indexing:** Create indexes on frequently queried columns
- **Query Plans:** Analyze execution plans
- **Caching:** Cache frequently accessed data
- **Pagination:** Don't fetch millions of rows

**Algorithm Optimization:**
- Choose right algorithm for problem
- Real example: O(n²) bubbling is slower than O(n log n) quicksort

**Memory Management:**
- Avoid memory leaks
- Clean up resources (database connections, file handles)
- Use pagination instead of loading all data

---

## 10.3 MONITORING PERFORMANCE

**Core Web Vitals (Google Metrics):**

**LCP (Largest Contentful Paint):**
- When largest content element visible
- Target: < 2.5 seconds
- Images, text blocks

**FID (First Input Delay):**
- Delay responding to user interaction
- Target: < 100 ms
- Improve: Defer non-critical work

**CLS (Cumulative Layout Shift):**
- Unexpected layout shifts
- Target: < 0.1
- Avoid: Dynamic content, ads without fixed space

**Metrics:**
- **TTFB (Time to First Byte):** Server response time
- **DOMContentLoaded:** HTML parsed, DOM ready
- **Load Event:** All resources loaded
- **FCP (First Contentful Paint):** First content visible
- **Time to Interactive:** Page interactive

---

# 11. SOFTWARE DEVELOPMENT PRACTICES

## 11.1 VERSION CONTROL

**Git Concepts:**

**Repository:**
- Local: Your computer
- Remote: Server (GitHub, GitLab)

**Branch:**
- Independent line of development
- Real example:
  - `main`: Production code
  - `develop`: Development code
  - `feature/user-auth`: Feature branch

**Common Workflow:**
```
git checkout -b feature/new-feature
# Make changes
git add .
git commit -m "Add new feature"
git push origin feature/new-feature
# Create Pull Request on GitHub
# After review, merge to main
```

**Merge vs Rebase:**
- **Merge:** Combines branches, creates merge commit
- **Rebase:** Rewrites history, cleaner but danger of conflicts

---

**Git Conventions:**

**Commit Messages:**
```
type(scope): subject

body

footer

Example:
feat(auth): add login functionality

- Implement JWT authentication
- Add email validation
- Create login endpoint

Closes #123
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Code style (no logic change)
- `refactor`: Code refactor
- `test`: Add tests
- `chore`: Maintenance

---

## 11.2 CODE QUALITY

**SOLID Principles:**

**S - Single Responsibility:**
- Class should do one thing
- **Bad:**
```javascript
class User {
  saveToDatabase() { }
  sendEmail() { }
  generateReport() { }
}
```

**Good:**
```javascript
class User { }
class UserRepository { saveToDatabase() }
class EmailService { sendEmail() }
```

---

**O - Open/Closed:**
- Open for extension, closed for modification
- Use inheritance/interfaces
```javascript
// Bad: Modify function for new payment method
function processPayment(method, amount) {
  if (method === 'stripe') stripe.charge(amount);
  else if (method === 'paypal') paypal.charge(amount);
}

// Good: Each processor is separate
interface PaymentProcessor {
  process(amount);
}
class StripeProcessor implements PaymentProcessor { }
```

---

**L - Liskov Substitution:**
- Subclass can replace parent class
- Behavior should be predictable
```javascript
class Vehicle {
  drive() { }
}

class Car extends Vehicle {
  drive() { /* drives forward */ }
}

class Plane extends Vehicle {
  drive() { /* needs runway to drive forward */ }
}
// Plane shouldn't extend Vehicle, violates principle
```

---

**I - Interface Segregation:**
- Don't force classes to implement unused methods
```javascript
// Bad
interface Worker {
  work();
  eat();
  sleep();
}

// Robot can't eat/sleep
class Robot implements Worker {
  eat() { throw 'Robots cannot eat'; }
}

// Good: Separate interfaces
interface Workable { work(); }
interface Eatable { eat(); }
```

---

**D - Dependency Inversion:**
- Depend on abstractions, not concrete implementations
```javascript
// Bad: Dependent on EmailService
class UserService {
  sendEmail() { return new EmailService().send(); }
}

// Good: Inject dependency
class UserService {
  constructor(emailService) {
    this.emailService = emailService;
  }
}
```

---

**DRY (Don't Repeat Yourself):**
- Avoid code duplication
- Extract common logic to functions

**KISS (Keep It Simple Stupid):**
- Simplicity over complexity
- Avoid over-engineering

**YAGNI (You Aren't Gonna Need It):**
- Don't add features you don't need now
- Avoid over-building

---

## 11.3 DOCUMENTATION

**Code Comments:**
- Explain WHY, not WHAT
- WHAT is obvious from code
- WHY is not obvious

```javascript
// Good
const timeout = 5000; // Firebase cloud function timeout limit

// Bad
const timeout = 5000; // Set timeout to 5000
```

**README:**
- Project description
- Installation instructions
- Usage examples
- Contributing guidelines

**API Documentation:**
- Endpoint descriptions
- Request/response examples
- Error codes
- Tools: Swagger, OpenAPI, Postman

---

## 11.4 AGILE & SCRUM

**Agile:**
- Iterative development with frequent releases
- Embracing change
- Customer feedback

**Scrum:**
- Framework for Agile
- **Sprint:** 1-2 week cycles
- **Sprint Planning:** What to build this sprint
- **Daily Standup:** 15 min sync
- **Sprint Review:** Demo to stakeholders
- **Sprint Retrospective:** What went well/improve

**Kanban:**
- Continuous flow of work
- **Columns:** To Do → Doing → Done
- **WIP Limit:** Max items in Doing

---

## 11.5 REFACTORING

**Definition:** Improving code without changing behavior

**Techniques:**
- **Extract Function:** Move code to separate function
- **Rename:** Better variable/function names
- **Remove Duplication:** DRY principle
- **Simplify Logic:** Reduce complexity
- **Optimize Performance:** After refactoring, optimize

**When to Refactor:**
- Add feature becomes hard
- Debugging takes too long
- Code has many issues
- Regular maintenance

---

## 11.6 CODE REVIEWS

**Purpose:**
- Catch bugs early
- Share knowledge
- Maintain code quality
- Improve as developer

**Good Review:**
- Check functionality
- Check code quality/style
- Test edge cases
- Suggest improvements
- Be respectful

---

---

## QUICK REFERENCE COMPARISON TABLES

### Data Structure Complexity Comparison

| Structure | Access | Search | Insert | Delete | Space |
|-----------|--------|--------|--------|--------|-------|
| Array | O(1) | O(n) | O(n) | O(n) | O(n) |
| Linked List | O(n) | O(n) | O(1)* | O(1)* | O(n) |
| Stack | O(n) | O(n) | O(1) | O(1) | O(n) |
| Queue | O(n) | O(n) | O(1) | O(1) | O(n) |
| BST | O(log n) | O(log n) | O(log n) | O(log n) | O(n) |
| Hash Table | N/A | O(1)** | O(1)** | O(1)** | O(n) |
| Heap | O(1)*** | O(n) | O(log n) | O(log n) | O(n) |

*Once position known | **Average case | ***Min/Max

---

### Database Types Comparison

| Type | Structure | Query Language | Consistency | Use Case | Examples |
|------|-----------|----------------|-------------|----------|----------|
| Relational | Tables | SQL | ACID | Structured data | MySQL, PostgreSQL |
| Document | JSON | MongoDB Query | Eventual | Flexible schema | MongoDB, Firestore |
| Key-Value | Key→Value | Simple | Eventual | Caching, sessions | Redis, Memcached |
| Graph | Nodes/Edges | Cypher | ACID | Relationships | Neo4j |
| Time-Series | Timestamps | SQL/Time-based | Eventual | Metrics, logs | InfluxDB, Prometheus |
| Search | Inverted Index | Lucene | Eventual | Full-text search | Elasticsearch |

---

### Sorting Algorithm Comparison

| Algorithm | Best | Average | Worst | Space | Stable |
|-----------|------|---------|-------|-------|--------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | No |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | Yes |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | No |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) | No |

---

### Testing Pyramid

```
        E2E Tests (Few)
         /         \
        /           \
       / Integration \
      /      Tests    \
     /                 \
    /   Unit Tests      \
   /     (Many)         \
  ___________________
```

Test Count: Unit > Integration > E2E
Test Speed: Unit > Integration > E2E
Test Cost: Unit < Integration < E2E

---

---

# CONCLUSION

This comprehensive guide covers the essential terminology every software engineer should know. The key to mastery is understanding not just the definitions, but when and why to use each tool, pattern, or concept.

**Tips for Learning:**
1. **Understand Fundamentals First:** Data structures and algorithms form the foundation
2. **Build Projects:** Apply concepts in real projects
3. **Read Others' Code:** Learn patterns from existing codebases
4. **Refactor Regularly:** Improve your code quality
5. **Stay Updated:** Technology evolves; keep learning
6. **Practice Problem Solving:** LeetCode, HackerRank for DSA

**Remember:** It's not about knowing everything, but knowing where to look and understanding the principles behind the tools.

---

**Last Updated:** February 2026
**Relevant For:** Full-stack development, system design interviews, architecture decisions