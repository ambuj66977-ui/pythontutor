// --- DATA ---
const lessonData = [
    { id: 1, category: "Python Basics", title: "What is Programming?", summary: "Understanding the fundamental concept of programming.", concepts: `<ul><li><strong>Communication with Computers:</strong> Just like we use languages like English or Hindi to communicate with each other, we use a programming language to communicate with a computer.</li><li><strong>Giving Instructions:</strong> Programming is the way we provide a set of instructions for a computer to perform various tasks.</li></ul>`, code: null },
    { id: 2, category: "Python Basics", title: "What is Python?", summary: "An introduction to the Python language and its key features.", concepts: `<ul><li><strong>Simple & Easy:</strong> Python is a simple and easy-to-understand language that reads like simple English. This makes it easy for beginners to learn.</li><li><strong>Key Features:</strong><ul><li>Easy to understand = Less development time</li><li>Free and open source</li><li>High-level language (abstracts away computer complexity)</li><li>Portable (works on Windows, Mac, Linux)</li></ul></li><li><strong>Installation:</strong> Python can be easily installed from the official website python.org.</li></ul>`, code: null },
    { id: 3, category: "Python Basics", title: "Modules, Comments & Pip", summary: "Using pre-written code, documenting your work, and installing packages.", concepts: `<ul><li><strong>Module:</strong> A file containing code written by someone else that can be imported and used in our programs. There are built-in modules (e.g., \`os\`) and external modules.</li><li><strong>Pip:</strong> The Package Installer for Python. It's a command-line tool used to install external modules from the Python Package Index (PyPI).</li><li><strong>Comments:</strong> Notes in code that are ignored by Python. They are used for explanation.<ul><li><strong>Single-line:</strong> Starts with <code>#</code>.</li><li><strong>Multi-line:</strong> Enclosed in triple quotes <code>'''...'''</code> or <code>"""..."""</code>.</li></ul></li></ul>`, code: `# To install a package like 'flask', open your terminal and type:\n# pip install flask\n\nimport os # Importing a built-in module\n\n# This is a single-line comment.\n'''\nThis is a multi-line comment.\nIt is useful for longer explanations.\n'''\n\nprint(os.getcwd()) # Get current working directory` },
    { id: 4, category: "Python Basics", title: "Using Python as a Calculator (REPL)", summary: "Using Python's interactive mode for quick calculations.", concepts: `<ul><li><strong>REPL:</strong> Stands for Read-Evaluate-Print Loop. It's an interactive shell that executes Python code one line at a time.</li><li><strong>How to start:</strong> Open your terminal or command prompt and type <code>python</code>.</li></ul>`, code: `# In the Python REPL, you can type expressions directly:\n# >>> 3 + 5\n# 8\n# >>> 10 * 2\n# 20` },
    { id: 5, category: "Python Basics", title: "Variables and Data Types", summary: "Storing data in variables and understanding Python's basic data types.", concepts: `<ul><li><strong>Variable:</strong> A name given to a memory location to store a value. It's like a container.</li><li><strong>Data Types:</strong> Python automatically identifies the data type. Primary types include:<ul><li><code>int</code>: Integers (e.g., 30, -5).</li><li><code>float</code>: Floating-point numbers (e.g., 71.22).</li><li><code>str</code>: Strings (text, e.g., "Harry").</li><li><code>bool</code>: Booleans (<code>True</code> or <code>False</code>).</li><li><code>None</code>: A special type representing the absence of a value.</li></ul></li><li><strong>Rules for Naming:</strong> Must start with a letter or underscore, can contain letters, numbers, and underscores. Cannot contain spaces.</li></ul>`, code: 'a = 30          # int\nb = "Harry"       # str\nc = 71.22         # float\n\n# The type() function shows a variable\'s data type\nprint(f"The type of b is: {type(b)}")' },
    { id: 6, category: "Python Basics", title: "Operators", summary: "Using symbols for arithmetic, assignment, comparison, and logical operations.", concepts: `<ul><li><strong>Arithmetic Operators:</strong> <code>+</code> (add), <code>-</code> (subtract), <code>*</code> (multiply), <code>/</code> (divide), <code>%</code> (modulus/remainder), <code>**</code> (exponent), <code>//</code> (floor division).</li><li><strong>Assignment Operators:</strong> <code>=</code>, <code>+=</code>, <code>-=</code>, etc.</li><li><strong>Comparison Operators:</strong> <code>==</code> (equal to), <code>!=</code> (not equal), <code>></code>, <code><</code>, <code>>=</code>, <code><=</code>.</li><li><strong>Logical Operators:</strong> <code>and</code>, <code>or</code>, <code>not</code>.</li></ul>`, code: `a = 15\nb = 4\nprint(f"a + b = {a + b}")\nprint(f"Remainder of a / b = {a % b}")\n\n# Comparison\nis_equal = (a == b)\nprint(f"Are a and b equal? {is_equal}")` },
    { id: 7, category: "Python Basics", title: "Typecasting", summary: "Explicitly converting variables from one data type to another.", concepts: `<ul><li><strong>Conversion Functions:</strong> Use built-in functions like <code>int()</code>, <code>float()</code>, and <code>str()</code> to convert between types.</li><li><strong>Use Case:</strong> It's essential for user input, as the <code>input()</code> function always returns a string.</li></ul>`, code: 'a_str = "32"\nb_int = int(a_str) # Convert string to integer\nc_float = float(b_int) # Convert integer to float\n\nprint(f"String: {a_str}, Integer: {b_int}, Float: {c_float}")' },
    { id: 8, category: "Python Basics", title: "User Input", summary: "Making your programs interactive by getting input from the user.", concepts: `<ul><li><strong><code>input()</code> function:</strong> This function allows the user to provide input from the keyboard.</li><li><strong>Return Type:</strong> The output of <code>input()</code> is always a <strong>string</strong>, even if the user enters a number. You must typecast it if you need to perform calculations.</li></ul>`, code: `name = input("Enter your name: ")\nage_str = input("Enter your age: ")\n\n# Convert age to integer for calculations\nage_int = int(age_str)\n\nprint(f"Hello, {name}! You will be {age_int + 1} years old next year.")` },
    { id: 9, category: "Strings", title: "String Basics", summary: "Understanding what strings are and how they are created.", concepts: `<ul><li><strong>Definition:</strong> A string is a data type representing a sequence of characters.</li><li><strong>Creation:</strong> Strings can be enclosed in single quotes (<code>'...'</code>), double quotes (<code>"..."</code>), or triple quotes (<code>'''...'''</code> or <code>"""..."""</code>). Triple quotes are used for multi-line strings.</li></ul>`, code: 'single_quoted = \'Harry\'\ndouble_quoted = "Harry"\ntriple_quoted = """Harry is a good boy\nand a programmer."""\nprint(triple_quoted)' },
    { id: 10, category: "Strings", title: "String Slicing & Indexing", summary: "Accessing parts of strings using indexes and slices.", concepts: `<ul><li><strong>Indexing:</strong> Access individual characters. Indexing starts at <code>0</code>.</li><li><strong>Negative Indexing:</strong> Access characters from the end. <code>-1</code> is the last character, <code>-2</code> is the second to last, etc.</li><li><strong>Slicing <code>[start:stop]</code>:</strong> Extracts a substring. The <code>start</code> index is included, but the <code>stop</code> index is not.</li><li><strong>Slicing with Skip <code>[start:stop:step]</code>:</strong> Extracts characters with a given step value.</li></ul>`, code: 'name = "Harry"\n# H a r r y\n# 0 1 2 3 4\n# -5-4-3-2-1\n\nprint(name[0:3]) # Prints "Har"\nprint(name[-4:-1]) # Prints "arr"\n\nword = "amazing"\nprint(word[1:6:2]) # Prints "mzn"' },
    { id: 11, category: "Strings", title: "String Methods", summary: "Using built-in functions to manipulate and analyze strings.", concepts: `<ul><li><strong><code>len(string)</code>:</strong> Returns the length of the string.</li><li><strong><code>string.endswith("...")</code>:</strong> Checks if the string ends with a specific substring.</li><li><strong><code>string.count("c")</code>:</strong> Counts occurrences of a character or substring.</li><li><strong><code>string.capitalize()</code>:</strong> Capitalizes the first character.</li><li><strong><code>string.find("word")</code>:</strong> Returns the index of the first occurrence of a word.</li><li><strong><code>string.replace("old", "new")</code>:</strong> Replaces all occurrences of a substring.</li></ul>`, code: 'story = "once upon a time"\nprint(len(story)) # 16\nprint(story.endswith("time")) # True\nprint(story.count("o")) # 2\nprint(story.capitalize()) # "Once upon a time"\nprint(story.replace("once", "twice")) # "twice upon a time"' },
    { id: 12, category: "Strings", title: "Escape Sequence Characters", summary: "Using special backslash characters to represent newlines, tabs, and quotes.", concepts: `<ul><li><strong>Definition:</strong> A sequence of characters that represents a single special character when used inside a string.</li><li><strong>Common Sequences:</strong><ul><li><code>\\n</code>: Newline</li><li><code>\\t</code>: Tab</li><li><code>\\'</code>: Single quote</li><li><code>\\\\</code>: Backslash</li></ul></li></ul>`, code: 'formatted_letter = "Dear Harry,\\n\\tThis Python Course is nice.\\nThanks!"\nprint(formatted_letter)' },
    { id: 13, category: "Functions & Data Structures", title: "Lists", summary: "Working with ordered, changeable collections of items.", concepts: `<ul><li><strong>Definition:</strong> A container to store a set of values of any data type. Created with square brackets <code>[]</code>.</li><li><strong>Mutable:</strong> Lists can be changed after they are created.</li><li><strong>Indexing & Slicing:</strong> Works the same way as strings.</li></ul>`, code: 'friends = ["Apple", "Akash", "Rohan", 7, False]\nprint(friends[0]) # "Apple"\nprint(friends[1:3]) # ["Akash", "Rohan"]' },
    { id: 14, category: "Functions & Data Structures", title: "List Methods", summary: "Modifying lists using built-in methods.", concepts: `<ul><li><strong><code>list.sort()</code>:</strong> Sorts the list in place.</li><li><strong><code>list.reverse()</code>:</strong> Reverses the list in place.</li><li><strong><code>list.append(item)</code>:</strong> Adds an item to the end of the list.</li><li><strong><code>list.insert(index, item)</code>:</strong> Inserts an item at a specific index.</li><li><strong><code>list.pop(index)</code>:</strong> Removes and returns the item at the given index.</li><li><strong><code>list.remove(item)</code>:</strong> Removes the first occurrence of the item.</li></ul>`, code: 'L1 = [1, 8, 7, 2, 21, 15]\nL1.sort()\nprint(L1) # [1, 2, 7, 8, 15, 21]\nL1.append(45)\nprint(L1) # [1, 2, 7, 8, 15, 21, 45]' },
    { id: 15, category: "Functions & Data Structures", title: "Tuples", summary: "Working with ordered, unchangeable collections of items.", concepts: `<ul><li><strong>Definition:</strong> An immutable data type created with parentheses <code>()</code>.</li><li><strong>Immutable:</strong> Once a tuple is defined, its elements cannot be altered or manipulated.</li><li><strong>Note:</strong> A tuple with a single element needs a trailing comma: <code>(1,)</code>.</li></ul>`, code: 't = (1, 7, 2)\n# The following line would raise a TypeError:\n# t[0] = 5\nprint(t)' },
    { id: 16, category: "Functions & Data Structures", title: "Tuple Methods", summary: "Using the few available methods for tuples.", concepts: `<ul><li>Since tuples are immutable, they have very few methods.</li><li><strong><code>tuple.count(item)</code>:</strong> Returns the number of times an item occurs.</li><li><strong><code>tuple.index(item)</code>:</strong> Returns the index of the first occurrence of an item.</li></ul>`, code: 'a = (1, 7, 2, 7)\nprint(a.count(7)) # 2\nprint(a.index(2)) # 2' },
    { id: 17, category: "Functions & Data Structures", title: "Dictionaries", summary: "Storing data in key-value pairs.", concepts: `<ul><li><strong>Definition:</strong> A collection of key-value pairs, created with curly braces <code>{key: value}</code>.</li><li><strong>Properties:</strong> Dictionaries are unordered, mutable (changeable), and indexed by keys. Keys must be unique and immutable.</li></ul>`, code: `my_dict = {\n    "harry": "Code",\n    "marks": 100,\n    "list": [1, 2, 9]\n}\nprint(my_dict["harry"]) # "Code"\nprint(my_dict["list"]) # [1, 2, 9]` },
    { id: 18, category: "Functions & Data Structures", title: "Dictionary Methods", summary: "Using built-in methods to work with dictionaries.", concepts: `<ul><li><strong><code>dict.items()</code>:</strong> Returns a list of (key, value) tuples.</li><li><strong><code>dict.keys()</code>:</strong> Returns a list of all keys.</li><li><strong><code>dict.values()</code>:</strong> Returns a list of all values.</li><li><strong><code>dict.update({key: value})</code>:</strong> Adds or updates key-value pairs.</li><li><strong><code>dict.get(key)</code>:</strong> Safely gets a value by key. Returns <code>None</code> if the key doesn't exist, preventing an error.</li></ul>`, code: `marks = {"Harry": 92, "Rohan": 98}\nprint(list(marks.keys())) # ["Harry", "Rohan"]\n\nmarks.update({"Shubham": 95})\nprint(marks)\n\nprint(marks.get("Rohan")) # 98` },
    { id: 19, category: "Functions & Data Structures", title: "Sets", summary: "Using unordered collections of unique, non-repetitive items.", concepts: `<ul><li><strong>Definition:</strong> A collection of non-repetitive elements, created with <code>set()</code> or curly braces <code>{}</code>. Note: <code>{}</code> alone creates an empty dictionary, not a set.</li><li><strong>Properties:</strong> Sets are unordered, unindexed, and do not allow duplicate values.</li></ul>`, code: 's = {1, 8, 2, 3, 3}\nprint(s) # {1, 2, 3, 8}\n\n# Creating an empty set\nempty_set = set()\nempty_set.add(1)\nprint(empty_set) # {1}' },
    { id: 20, category: "Functions & Data Structures", title: "Set Operations", summary: "Performing mathematical operations on sets.", concepts: `<ul><li><strong><code>len(s)</code>:</strong> Returns the length of the set.</li><li><strong><code>s.remove(item)</code>:</strong> Removes an item (raises an error if not found).</li><li><strong><code>s.pop()</code>:</strong> Removes and returns an arbitrary element.</li><li><strong><code>s.clear()</code>:</strong> Empties the set.</li><li><strong><code>s.union(other)</code> or <code>s | other</code>:</strong> Returns a new set with all items from both.</li><li><strong><code>s.intersection(other)</code> or <code>s & other</code>:</strong> Returns a new set with items present in both.</li></ul>`, code: 's1 = {1, 8, 2, 3}\ns2 = {2, 3, 11}\n\nprint(s1.union(s2)) # {1, 2, 3, 8, 11}\nprint(s1.intersection(s2)) # {2, 3}' },
    { id: 21, category: "Control Flow", title: "Conditional Expressions", summary: "Making decisions in your code with if, elif, and else.", concepts: `<ul><li><strong>Purpose:</strong> Allows the program to execute instructions based on whether a condition is met.</li><li><strong><code>if (condition):</code>:</strong> Executes the indented code if the condition is true.</li><li><strong><code>elif (condition):</code>:</strong> Used to check multiple other conditions.</li><li><strong><code>else:</code>:</strong> Executes if all preceding <code>if</code> and <code>elif</code> conditions are false.</li></ul>`, code: 'a = 22\nif (a > 9):\n    print("Greater")\nelse:\n    print("Lesser")' },
    { id: 22, category: "Control Flow", title: "Relational & Logical Operators", summary: "Using operators to create complex conditions.", concepts: `<ul><li><strong>Relational Operators:</strong> Used to evaluate conditions. Includes <code>==</code>, <code>>=</code>, <code><=</code>, <code>></code>, <code><</code>, <code>!=</code>.</li><li><strong>Logical Operators:</strong> Used to combine conditional statements.<ul><li><strong><code>and</code>:</strong> True only if both operands are true.</li><li><strong><code>or</code>:</strong> True if at least one operand is true.</li><li><strong><code>not</code>:</strong> Inverts the boolean value.</li></ul></li></ul>`, code: 'age = 25\nif (age > 20 and age < 30):\n    print("You are in your 20s!")' },
    { id: 23, category: "Control Flow", title: "While Loops", summary: "Repeating a block of code as long as a condition is true.", concepts: `<ul><li><strong>Syntax:</strong> <code>while condition: # Body of loop</code></li><li><strong>Execution Flow:</strong> The condition is checked first. If it's true, the body is executed. This process repeats until the condition becomes false.</li><li><strong>Infinite Loop:</strong> If the condition never becomes false, the loop will run forever.</li></ul>`, code: 'i = 0\nwhile i < 5:\n    print("Harry")\n    i = i + 1' },
    { id: 24, category: "Control Flow", title: "For Loops", summary: "Iterating through a sequence like a list, tuple, or string.", concepts: `<ul><li><strong>Syntax:</strong> <code>for item in sequence: # Body of loop</code></li><li><strong><code>range()</code> function:</strong> Used to generate a sequence of numbers to loop through. Syntax: <code>range(start, stop, step-size)</code>.</li></ul>`, code: 'l = [1, 7, 8]\nfor item in l:\n    print(item)\n\n# Using range\nfor i in range(5): # From 0 up to (but not including) 5\n    print(i)' },
    { id: 25, category: "Control Flow", title: "Loop Control Statements", summary: "Using `break`, `continue`, and `pass` to control loop behavior.", concepts: `<ul><li><strong><code>break</code>:</strong> Immediately terminates the current loop.</li><li><strong><code>continue</code>:</strong> Skips the current iteration and proceeds to the next one.</li><li><strong><code>pass</code>:</strong> A null statement that does nothing. It's used as a placeholder where code is syntactically required but no action is needed.</li></ul>`, code: 'for i in range(10):\n    if i == 3:\n        continue # Skip printing 3\n    if i == 7:\n        break # Stop the loop at 7\n    print(i)' },
    { id: 26, category: "Control Flow", title: "For Loop with `else`", summary: "Executing a block of code when a for loop completes without hitting a `break`.", concepts: `<ul><li><strong>Purpose:</strong> The <code>else</code> block is executed only if the loop finishes its full iteration naturally.</li><li><strong>Use Case:</strong> Useful for search operations. The <code>else</code> block can signify that the item was not found.</li></ul>`, code: 'l = [1, 7, 8]\nfor item in l:\n    print(item)\nelse:\n    print("Done") # This is printed when the loop completes.' },
    { id: 27, category: "Functions & Data Structures", title: "Functions", summary: "Creating named, reusable blocks of code to perform specific tasks.", concepts: `<ul><li><strong>Definition:</strong> A group of statements performing a specific task. Use the <code>def</code> keyword.</li><li><strong>Reusability:</strong> Functions help implement the DRY (Don't Repeat Yourself) principle.</li><li><strong>Function Call:</strong> Execute a function by writing its name followed by parentheses, e.g., <code>func1()</code>.</li></ul>`, code: 'def greet(name):\n    print(f"Good Day, {name}")\n\ngreet("Harry")' },
    { id: 28, category: "Functions & Data Structures", title: "Function Arguments & Return", summary: "Passing data into functions and getting values back.", concepts: `<ul><li><strong>Arguments:</strong> A function can accept values to work with. These are placed in the parentheses.</li><li><strong>Default Parameter Value:</strong> You can provide a default value for an argument, which is used if no value is passed.</li><li><strong><code>return</code> Statement:</strong> A function can send a value back to the caller.</li></ul>`, code: 'def my_sum(a, b, c=0): # c has a default value\n    return a + b + c\n\nresult = my_sum(5, 10)\nprint(result) # 15' },
    { id: 29, category: "Functions & Data Structures", title: "Recursion", summary: "Solving problems by creating functions that call themselves.", concepts: `<ul><li><strong>Concept:</strong> A function that calls itself to solve a problem based on a mathematical formula.</li><li><strong>Base Case:</strong> A condition that stops the recursion to prevent an infinite loop.</li><li><strong>Recursive Step:</strong> The part where the function calls itself, usually with a modified argument to move closer to the base case.</li></ul>`, code: 'def factorial(n):\n    if n == 0 or n == 1: # Base Case\n        return 1\n    else: # Recursive Step\n        return n * factorial(n - 1)\n\nprint(f"5! is {factorial(5)}")' },
    { id: 30, category: "File Handling", title: "File I/O Basics", summary: "Reading from and writing to files on your computer.", concepts: `<ul><li><strong>Why Files?:</strong> RAM is volatile. To persist data, we store it in files on a non-volatile device like a hard drive.</li><li><strong>File Types:</strong> Text files (.txt, .py) and Binary files (.jpg, .dat).</li><li><strong><code>open()</code> function:</strong> The built-in function to open a file. It takes two parameters: filename and mode.</li></ul>`, code: '# f = open("this.txt", "r")\n# The above line opens the file in read mode.' },
    { id: 31, category: "File Handling", title: "File Modes", summary: "Understanding the different modes for opening a file.", concepts: `<ul><li><strong><code>'r'</code>:</strong> Read mode (default). Throws an error if the file doesn't exist.</li><li><strong><code>'w'</code>:</strong> Write mode. Creates a new file or overwrites an existing one.</li><li><strong><code>'a'</code>:</strong> Append mode. Creates a new file or adds content to the end of an existing one.</li><li><strong><code>'+'</code>:</strong> Update mode (read and write).</li><li>Append <strong><code>'b'</code></strong> for binary mode (e.g., <code>'rb'</code>) or <strong><code>'t'</code></strong> for text mode (e.g., <code>'rt'</code>).</li></ul>`, code: 'f = open("another.txt", "w")\nf.write("Please write this to the file.")\nf.close()' },
    { id: 32, category: "File Handling", title: "Reading & Writing Methods", summary: "Using methods to interact with file content.", concepts: `<ul><li><strong>Reading:</strong><ul><li><strong><code>f.read()</code>:</strong> Reads the entire file content. Can take an argument for number of characters.</li><li><strong><code>f.readline()</code>:</strong> Reads one full line at a time.</li></ul></li><li><strong>Writing:</strong><ul><li><strong><code>f.write("...")</code>:</strong> Writes a string to the file. Can be called multiple times.</li></ul></li><li><strong>Closing:</strong> Always close a file with <strong><code>f.close()</code></strong> to free up resources.</li></ul>`, code: 'f = open("this.txt", "r")\ntext = f.read()\nprint(text)\nf.close()' },
    { id: 33, category: "File Handling", title: "The `with` Statement", summary: "The best practice for opening files, as it handles closing automatically.", concepts: `<ul><li><strong>Automatic Closing:</strong> The <code>with</code> statement ensures that the file is properly closed, even if errors occur within the block.</li><li><strong>Syntax:</strong> <code>with open(...) as f: # do stuff</code></li><li>You do not need to call <code>f.close()</code> when using a <code>with</code> block.</li></ul>`, code: 'with open("this.txt", "r") as f:\n    content = f.read()\n# The file is automatically closed here.\nprint(content)' },
    { id: 34, category: "Object-Oriented Programming (OOP)", title: "Intro to OOP", summary: "Understanding the paradigm of solving problems by creating objects.", concepts: `<ul><li><strong>Paradigm:</strong> A popular approach to programming that focuses on using reusable code (implements DRY principle).</li><li><strong>Class:</strong> A blueprint for creating objects. It defines attributes and methods.</li><li><strong>Object:</strong> An instantiation of a class. Memory is allocated when an object is created.</li><li><strong>Abstraction & Encapsulation:</strong> Objects hide implementation details from the user.</li></ul>`, code: 'class RailwayForm:\n    formType = "RailwayForm"\n    def printData(self):\n        print(f"Name is {self.name}")\n        print(f"Train is {self.train}")\n\nharrysApplication = RailwayForm()\nharrysApplication.name = "Harry"\nharrysApplication.train = "Rajdhani Express"\nharrysApplication.printData()' },
    { id: 35, category: "Object-Oriented Programming (OOP)", title: "Class & Instance Attributes", summary: "Distinguishing between attributes that belong to the class and to an object instance.", concepts: `<ul><li><strong>Class Attribute:</strong> An attribute that belongs to the class itself, shared by all instances. E.g., a company name for all employees.</li><li><strong>Instance Attribute:</strong> An attribute that belongs to a specific instance (object). E.g., an employee's name.</li><li><strong>Precedence:</strong> Instance attributes take preference over class attributes during assignment and retrieval.</li></ul>`, code: 'class Employee:\n    company = "Google" # Class attribute\n\nharry = Employee()\nprint(harry.company) # "Google"\n\n# Changing the class attribute affects all instances\nEmployee.company = "YouTube"\nprint(harry.company) # "YouTube"' },
    { id: 36, category: "Object-Oriented Programming (OOP)", title: "The `self` Parameter", summary: "Understanding the `self` parameter which refers to the current instance of the class.", concepts: `<ul><li><strong>Reference to Instance:</strong> <code>self</code> refers to the specific instance of the class on which a method is being called.</li><li><strong>Automatic Passing:</strong> It is automatically passed as the first argument when you call a method from an object. <code>harry.getSalary()</code> is equivalent to <code>Employee.getSalary(harry)</code>.</li></ul>`, code: 'class Employee:\n    company = "Google"\n    def getSalary(self):\n        # self refers to the instance, e.g., \'harry\'\n        print(f"Salary for {self.name} is {self.salary}")\n\nharry = Employee()\nharry.name = "Harry"\nharry.salary = "100K"\nharry.getSalary()' },
    { id: 37, category: "Object-Oriented Programming (OOP)", title: "Constructors (`__init__`)", summary: "Using the special `__init__` method to initialize object attributes.", concepts: `<ul><li><strong>Special Method:</strong> <code>__init__()</code> is a special method that is run as soon as an object is created.</li><li><strong>Constructor:</strong> It is also known as a constructor.</li><li><strong>Purpose:</strong> It takes <code>self</code> as the first argument and can take other arguments to set the initial state of the object.</li></ul>`, code: 'class Employee:\n    def __init__(self, name, salary):\n        self.name = name\n        self.salary = salary\n        print("Employee has been created!")\n\n    def getDetails(self):\n        print(f"Name: {self.name}, Salary: {self.salary}")\n\nharry = Employee("Harry", "100K")\nharry.getDetails()' },
    { id: 38, category: "Object-Oriented Programming (OOP)", title: "Static Methods", summary: "Creating methods that belong to a class but do not use the `self` parameter.", concepts: `<ul><li><strong>No Instance Needed:</strong> A static method doesn't operate on a specific instance of the class.</li><li><strong><code>@staticmethod</code> Decorator:</strong> Use this decorator to mark a method as static.</li><li><strong>Use Case:</strong> Useful for utility functions that are related to the class but don't need access to instance data.</li></ul>`, code: 'class Employee:\n    @staticmethod\n    def greet():\n        print("Good morning, user!")\n\nEmployee.greet()' },
    { id: 39, category: "Object-Oriented Programming (OOP)", title: "Inheritance", summary: "Creating a new class (child) from an existing class (parent).", concepts: `<ul><li><strong>Concept:</strong> A way of creating a new class that inherits the methods and attributes of an existing class.</li><li><strong>Syntax:</strong> <code>class ChildClass(ParentClass): ...</code></li><li><strong>Benefit:</strong> Promotes code reusability. Child classes can also override or add their own methods and attributes.</li></ul>`, code: 'class Employee: # Base Class\n    company = "Google"\n\nclass Programmer(Employee): # Derived Class\n    language = "Python"\n\np = Programmer()\nprint(p.company) # "Google" (inherited)\nprint(p.language) # "Python"' },
    { id: 40, category: "Object-Oriented Programming (OOP)", title: "Types of Inheritance", summary: "Exploring single, multiple, and multilevel inheritance structures.", concepts: `<ul><li><strong>Single Inheritance:</strong> A child class inherits from a single parent class. (A -> B)</li><li><strong>Multiple Inheritance:</strong> A child class inherits from more than one parent class. (A, B -> C)</li><li><strong>Multilevel Inheritance:</strong> A child class becomes a parent for another child class. (A -> B -> C)</li></ul>`, code: '# Multilevel Inheritance Example\nclass Animal:\n    pass\n\nclass Pet(Animal):\n    pass\n\nclass Dog(Pet):\n    pass' },
    { id: 41, category: "Object-Oriented Programming (OOP)", title: "The `super()` Method", summary: "Accessing methods of the parent (super) class from the child class.", concepts: `<ul><li><strong>Purpose:</strong> Used to call the methods of the base class. This is useful for extending the functionality of an inherited method without completely overriding it.</li><li><strong>Common Use:</strong> Calling the parent class's constructor (<code>super().__init__()</code>) from the child's constructor.</li></ul>`, code: 'class Person:\n    def __init__(self):\n        print("Initializing Person...")\n\nclass Employee(Person):\n    def __init__(self):\n        super().__init__() # Call parent constructor\n        print("Initializing Employee...")\n\nemp = Employee()' },
    { id: 42, category: "Object-Oriented Programming (OOP)", title: "Class Methods", summary: "Creating methods that are bound to the class, not the object.", concepts: `<ul><li><strong><code>@classmethod</code> Decorator:</strong> Used to create a class method.</li><li><strong><code>cls</code> Parameter:</strong> A class method takes <code>cls</code> as its first argument, which refers to the class itself, not the instance.</li><li><strong>Use Case:</strong> Useful for methods that work with the class, such as factory methods for creating instances in a specific way.</li></ul>`, code: 'class Employee:\n    company = "Google"\n    @classmethod\n    def changeCompany(cls, newCompany):\n        cls.company = newCompany\n\ne = Employee()\nprint(e.company) # "Google"\n\nEmployee.changeCompany("Tesla")\nprint(e.company) # "Tesla"' },
    { id: 43, category: "Object-Oriented Programming (OOP)", title: "Property Decorator (Getters & Setters)", summary: "Using `@property` to create managed attributes.", concepts: `<ul><li><strong>Getter (\`@property\`):</strong> A method that retrieves the value of an attribute. It allows you to access the method as if it were an attribute (e.g., \`e.name\` instead of \`e.name()\`).</li><li><strong>Setter (\`@name.setter\`):</strong> A method that sets the value of an attribute. This is where you can add validation logic.</li></ul>`, code: 'class Employee:\n    def __init__(self, name):\n        self._name = name\n    \n    @property\n    def name(self):\n        return self._name\n\n    @name.setter\n    def name(self, value):\n        if len(value) > 10:\n            raise ValueError("Name is too long")\n        self._name = value\n\ne = Employee("Harry")\nprint(e.name)\n# e.name = "ThisNameIsWayTooLong" # Would raise ValueError' },
    { id: 44, category: "Object-Oriented Programming (OOP)", title: "Operator Overloading", summary: "Defining how standard operators work with your custom objects.", concepts: `<ul><li><strong>Dunder Methods:</strong> Operators are overloaded using special "dunder" (double underscore) methods.</li><li><strong>Examples:</strong><ul><li><code>+</code> is overloaded by <code>__add__(self, other)</code></li><li><code>-</code> is overloaded by <code>__sub__(self, other)</code></li><li><code>*</code> is overloaded by <code>__mul__(self, other)</code></li></ul></li><li><strong>Benefit:</strong> Allows for more intuitive code (e.g., <code>v1 + v2</code> for vectors).</li></ul>`, code: 'class Number:\n    def __init__(self, num):\n        self.num = num\n    \n    def __add__(self, other):\n        return self.num + other.num\n\nn1 = Number(4)\nn2 = Number(6)\nprint(n1 + n2) # 10' },
    { id: 45, category: "Object-Oriented Programming (OOP)", title: "Other Dunder Methods", summary: "Exploring other useful magic methods like `__str__` and `__len__`.", concepts: `<ul><li><strong>Dunder:</strong> Double Underscore methods.</li><li><strong><code>__str__</code>:</strong> Defines the string representation for <code>print()</code>.</li><li><strong><code>__len__</code>:</strong> Defines the behavior for <code>len()</code>.</li></ul>`, code: 'class Vector:\n    def __init__(self, vec):\n        self.vec = vec\n    \n    def __str__(self):\n        return f"Vector: {self.vec}"\n\n    def __len__(self):\n        return len(self.vec)\n\nv = Vector([1, 2, 3])\nprint(v) # Vector: [1, 2, 3]\nprint(len(v)) # 3' },
    { id: 46, category: "Advanced Concepts", title: "Exception Handling", summary: "Managing errors gracefully using `try...except` blocks.", concepts: `<ul><li><strong>Purpose:</strong> To handle runtime errors (exceptions) and prevent the program from crashing.</li><li><strong><code>try</code> block:</strong> Code that might raise an exception is placed here.</li><li><strong><code>except</code> block:</strong> If an exception occurs in the <code>try</code> block, the corresponding <code>except</code> block is executed.</li><li>You can specify the type of exception to catch, e.g., <code>except ValueError:</code>.</li></ul>`, code: 'try:\n    a = int(input("Enter a number: "))\n    print(a)\nexcept ValueError as e:\n    print(f"Invalid input! Please enter an integer. Error: {e}")' },
    { id: 47, category: "Advanced Concepts", title: "Exception Handling with `else` and `finally`", summary: "Using the optional `else` and `finally` clauses.", concepts: `<ul><li><strong><code>else</code> clause:</strong> This block of code is executed only if the <code>try</code> block was successful (no exceptions were raised).</li><li><strong><code>finally</code> clause:</strong> This block of code is always executed, regardless of whether an exception occurred or not. It's used for cleanup actions like closing files.</li></ul>`, code: 'try:\n    f = open("file.txt", "r")\nexcept FileNotFoundError:\n    print("File not found.")\nelse:\n    print("File opened successfully.")\n    f.close()\nfinally:\n    print("Executing finally... This always runs.")' },
    { id: 48, category: "Advanced Concepts", title: "The `if __name__ == '__main__'` block", summary: "Controlling code execution based on whether a file is run directly or imported.", concepts: `<ul><li><strong><code>__name__</code> variable:</strong> A special variable that evaluates to the name of the module.</li><li><strong>Behavior:</strong> If the module is being run directly, <code>__name__</code> is set to <code>"__main__"</code>. If it's imported, <code>__name__</code> is set to the module's filename.</li><li><strong>Purpose:</strong> Allows you to write code that only runs when the file is executed as a script, not when it's imported as a module.</li></ul>`, code: 'def some_function():\n    print("This function can be imported.")\n\nif __name__ == "__main__":\n    print("This script was run directly.")\n    some_function()' },
    { id: 49, category: "Advanced Concepts", title: "Global Keyword & `enumerate`", summary: "Modifying global variables and iterating with a counter.", concepts: `<ul><li><strong><code>global</code> keyword:</strong> Used inside a function to modify a variable that is defined in the global scope.</li><li><strong><code>enumerate</code> function:</strong> Adds a counter to an iterable. It's an elegant way to get both the index and the item during a loop.</li></ul>`, code: 'a = 10 # global variable\ndef modify_global():\n    global a\n    a = 50\nmodify_global()\nprint(a) # 50\n\nmy_list = ["apple", "banana", "cherry"]\nfor index, fruit in enumerate(my_list):\n    print(index, fruit)' },
    { id: 50, category: "Advanced Concepts", title: "List Comprehensions", summary: "An elegant and concise way to create lists based on existing lists.", concepts: `<ul><li><strong>Syntax:</strong> <code>[expression for item in iterable if condition]</code></li><li><strong>Benefit:</strong> Often more readable and faster than creating the same list with a traditional for loop and an append.</li></ul>`, code: 'list1 = [1, 7, 12, 11, 22]\n# Create a new list with items from list1 that are greater than 8\nlist2 = [item for item in list1 if item > 8]\nprint(list2) # [12, 11, 22]' },
    { id: 51, category: "Modules & Libraries", title: "Virtual Environments", summary: "Isolating project dependencies from the main system installation.", concepts: `<ul><li><strong>Purpose:</strong> An environment that is the same as the system interpreter but is isolated from other Python environments on the system.</li><li><strong>Installation:</strong> <code>pip install virtualenv</code></li><li><strong>Creation:</strong> <code>virtualenv myprojectenv</code></li><li><strong>Activation:</strong> You must activate the environment to use it.</li><li><strong><code>pip freeze</code>:</strong> Lists all installed packages and their versions in the current environment. Use <code>pip freeze > requirements.txt</code> to save them.</li></ul>`, code: '# In your terminal:\n# pip install -r requirements.txt' },
    { id: 52, category: "Functional Programming", title: "Lambda Functions", summary: "Creating small, anonymous functions using the `lambda` keyword.", concepts: `<ul><li><strong>Anonymous Function:</strong> A function created without a name.</li><li><strong>Syntax:</strong> <code>lambda arguments: expression</code></li><li><strong>Use Case:</strong> Often used as a quick, one-line function passed as an argument to other functions like <code>map</code> or <code>filter</code>.</li></ul>`, code: 'square = lambda x: x * x\nprint(square(6)) # 36\n\nsum_three = lambda a, b, c: a + b + c\nprint(sum_three(1, 2, 3)) # 6' },
    { id: 53, category: "Functional Programming", title: "The `join()` Method", summary: "Creating a single string from an iterable of strings.", concepts: `<ul><li><strong>Syntax:</strong> <code>"separator".join(iterable)</code></li><li>It concatenates the elements of the iterable, with the separator string placed between each element.</li></ul>`, code: 'l = ["apple", "mango", "banana"]\nprint(", ".join(l)) # "apple, mango, banana"\nprint(" and ".join(l)) # "apple and mango and banana"' },
    { id: 54, category: "Functional Programming", title: "The `format()` Method", summary: "A versatile way to format strings with placeholder values.", concepts: `<ul><li><strong>Syntax:</strong> <code>"template {0} {1}".format(arg0, arg1)</code></li><li>It allows for positional and keyword-based formatting, offering more control than f-strings in some cases.</li></ul>`, code: 'template = "{} is a good {}"\nprint(template.format("Harry", "boy")) # "Harry is a good boy"\n\n# Using indices\nprint("{1} is a good {0}".format("Harry", "boy")) # "boy is a good Harry"' },
    { id: 55, category: "Functional Programming", title: "Map, Filter & Reduce", summary: "Applying functions to sequences in a concise way.", concepts: `<ul><li><strong><code>map(function, iterable)</code>:</strong> Applies a function to every item of an iterable and returns a map object (which can be converted to a list).</li><li><strong><code>filter(function, iterable)</code>:</strong> Creates a list of items for which the function returns <code>True</code>.</li><li><strong><code>reduce(function, iterable)</code>:</strong> Applies a rolling computation to sequential pairs of values in a list. It needs to be imported from <code>functools</code>.</li></ul>`, code: 'from functools import reduce\n\n# Map\nnums = [1, 2, 3, 4]\nsquares = list(map(lambda x: x*x, nums))\nprint(squares) # [1, 4, 9, 16]\n\n# Filter\nevens = list(filter(lambda x: x % 2 == 0, nums))\nprint(evens) # [2, 4]\n\n# Reduce\nsum_all = reduce(lambda x, y: x + y, nums)\nprint(sum_all) # 10' }
];

// --- DOM ELEMENTS ---
const contentContainer = document.getElementById('content-container');
const sidebarNav = document.getElementById('sidebar-nav');
const modal = document.getElementById('lesson-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const geminiControls = document.getElementById('gemini-controls');
const geminiResponseContainer = document.getElementById('gemini-response');
const modalScrollContainer = document.getElementById('modal-scroll-container');


// --- INITIALIZATION ---

// Group lessons by category for easier rendering
const categories = lessonData.reduce((acc, lesson) => {
    (acc[lesson.category] = acc[lesson.category] || []).push(lesson);
    return acc;
}, {});

// Generate Category Navigation and Content Sections
Object.keys(categories).forEach(category => {
    const safeId = category.replace(/[^a-zA-Z0-9]+/g, '-');

    // Create sidebar navigation link
    const navLink = document.createElement('a');
    navLink.href = `#${safeId}`;
    navLink.textContent = category;
    navLink.className = 'sidebar-link block font-medium text-gray-600 rounded-lg px-4 py-2';
    navLink.dataset.target = safeId;
    sidebarNav.appendChild(navLink);

    // Create main content section for the category
    const section = document.createElement('section');
    section.id = safeId;
    section.className = 'mb-16';

    const introText = getCategoryIntro(category);

    section.innerHTML = `
        <h2 class="text-3xl font-bold text-gray-800 border-b-2 border-indigo-200 pb-2 mb-4">${category}</h2>
        <p class="text-gray-600 mb-8">${introText}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Lesson cards will be inserted here -->
        </div>
    `;

    const cardContainer = section.querySelector('.grid');

    // Create and append lesson cards for the category
    categories[category].sort((a, b) => a.id - b.id).forEach(lesson => {
        const card = document.createElement('div');
        card.className = 'lesson-card bg-white rounded-lg p-6 cursor-pointer border border-gray-200/80';
        card.dataset.id = lesson.id;
        card.innerHTML = `
            <h4 class="font-bold text-lg text-indigo-800">${lesson.title}</h4>
            <p class="text-gray-600 text-sm mt-2">${lesson.summary}</p>
        `;
        cardContainer.appendChild(card);
    });

    contentContainer.appendChild(section);
});

// --- HELPER FUNCTIONS ---

function getCategoryIntro(category) {
    const intros = {
        'Python Basics': 'Start your journey here. These lessons cover the fundamental building blocks of Python, from installation and variables to basic operators and getting user input.',
        'Strings': 'Text is a primary data type. Learn how to manipulate, slice, and use powerful built-in string methods to process textual data effectively.',
        'Control Flow': 'Control the execution path of your programs. These lessons cover how to make decisions with conditionals and repeat actions with loops.',
        'Functions & Data Structures': 'Organize your code with functions and store your data efficiently with Python\'s versatile built-in data structures like lists, tuples, sets, and dictionaries.',
        'File Handling': 'Learn how to make your programs persistent by reading from and writing to files on your system. Master different file modes and best practices.',
        'Object-Oriented Programming (OOP)': 'Structure complex applications with OOP. These lessons introduce classes, objects, inheritance, and other core principles for building scalable and maintainable code.',
        'Functional Programming': 'Explore a different programming paradigm. Learn to write concise, declarative code using lambda functions and tools like map, filter, and reduce.',
        'Advanced Concepts': 'Dive deeper into powerful Python features. Learn to handle errors gracefully, create elegant list comprehensions, and understand key concepts like scope and the `__main__` block.',
        'Modules & Libraries': 'Explore Python\'s rich ecosystem. Learn to use built-in and third-party modules to interact with the OS, manage project dependencies, and more.'
    };
    return intros[category] || 'Explore the lessons in this category.';
}


// --- EVENT LISTENERS & OBSERVERS ---

// Main content click listener for lesson cards
contentContainer.addEventListener('click', (e) => {
    const card = e.target.closest('.lesson-card');
    if (card) {
        const lessonId = parseInt(card.dataset.id);
        const lesson = lessonData.find(l => l.id === lessonId);
        if (lesson) {
            openModal(lesson);
        }
    }
});

// Sidebar navigation click listener for smooth scrolling
sidebarNav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Sidebar active link highlighting on scroll
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('#sidebar-nav a');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle('active', link.dataset.target === entry.target.id);
            });
        }
    });
}, { rootMargin: '-50% 0px -50% 0px' });

sections.forEach(section => observer.observe(section));


// --- MODAL FUNCTIONS ---

function openModal(lesson) {
    modalTitle.textContent = lesson.title;

    let bodyHtml = `<h4 class="font-semibold text-lg mb-2 text-gray-700">Key Concepts</h4>${lesson.concepts}`;

    if (lesson.code) {
        const codeHtml = lesson.code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        bodyHtml += `
            <h4 class="font-semibold text-lg mt-6 mb-2 text-gray-700">Example Code</h4>
            <div class="relative group">
                <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto text-sm"><code class="language-python">${codeHtml}</code></pre>
                <button class="copy-btn absolute top-2 right-2 bg-gray-600 text-white text-xs font-semibold py-1 px-2 rounded-md opacity-0 group-hover:opacity-100" onclick="copyCode(this)">Copy</button>
            </div>
        `;
    }

    modalBody.innerHTML = bodyHtml;

    // Render Gemini AI controls
    renderGeminiControls(lesson);

    // Show modal with animation
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('opacity-100');
        modal.querySelector('.modal-content').classList.add('scale-100');
        modal.querySelector('.modal-content').classList.remove('scale-95');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('opacity-100');
    modal.querySelector('.modal-content').classList.remove('scale-100');
    modal.querySelector('.modal-content').classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
    document.body.style.overflow = '';
}

function copyCode(button) {
    const code = button.previousElementSibling.querySelector('code').innerText;
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    button.textContent = 'Copied!';
    setTimeout(() => {
        button.textContent = 'Copy';
    }, 2000);
}


// --- GEMINI AI INTEGRATION ---

function renderGeminiControls(lesson) {
    geminiControls.innerHTML = ''; // Clear old buttons

    const buttons = [
        { text: 'Clarify Concept ✨', type: 'clarify', condition: true },
        { text: 'Explain Code ✨', type: 'explain', condition: !!lesson.code },
        { text: 'Generate Problem ✨', type: 'problem', condition: true }
    ];
    
    buttons.forEach(btnInfo => {
        if (btnInfo.condition) {
            const button = document.createElement('button');
            button.className = 'gemini-btn bg-indigo-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';
            button.innerHTML = btnInfo.text;
            button.onclick = () => handleGeminiRequest(btnInfo.type, lesson);
            geminiControls.appendChild(button);
        }
    });

    geminiResponseContainer.classList.add('hidden');
    geminiResponseContainer.innerHTML = '';
}


async function handleGeminiRequest(type, lesson) {
    let prompt = '';
    switch (type) {
        case 'explain':
            prompt = `You are an expert Python tutor. Explain the following Python code line by line for a beginner. Be clear, concise, and use simple terms. Format your response using basic HTML for readability (e.g., <p>, <strong>, <ul>, <li>).\n\nCode:\n\`\`\`python\n${lesson.code}\n\`\`\``;
            break;
        case 'clarify':
            prompt = `You are an expert Python tutor. Explain the concept of "${lesson.title}" in a very simple way for a beginner. Use a real-world analogy to make it easier to understand. Format your response using basic HTML for readability (e.g., <p>, <strong>, <ul>, <li>).\n\nKey points to cover are: ${lesson.concepts.replace(/<[^>]*>/g, ' ')}`;
            break;
        case 'problem':
            prompt = `You are an expert Python tutor. Generate a simple practice problem based on the Python concept of "${lesson.title}". The problem should be suitable for a beginner. Provide a clear problem description, one hint, and a solution. Format the response using basic HTML, and wrap the solution in a <details> tag so it's hidden by default.`;
            break;
    }

    geminiResponseContainer.innerHTML = '<div class="flex justify-center items-center h-full"><div class="loader"></div></div>';
    geminiResponseContainer.classList.remove('hidden');
    modalScrollContainer.scrollTop = modalScrollContainer.scrollHeight;

    try {
        const result = await callGeminiAPI(prompt);
        geminiResponseContainer.innerHTML = simpleMarkdownToHtml(result);
    } catch (error) {
        console.error("Gemini API Error:", error);
        geminiResponseContainer.innerHTML = `<p class="text-red-600"><strong>Sorry, something went wrong.</strong></p><p class="text-sm text-gray-600 mt-2">Please try again. If the problem persists, the API service may be temporarily unavailable.</p><p class="text-xs text-gray-500 mt-2">Error: ${error.message}</p>`;
    }
}

async function callGeminiAPI(prompt) {
    const apiKey = ""; // IMPORTANT: Leave this empty. The key will be provided by the environment.
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    const payload = {
        contents: [{ "parts": [{ "text": prompt }] }]
    };

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`API call failed with status ${response.status}: ${errorBody}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!text) {
        throw new Error("Received an empty or invalid response from the API.");
    }

    return text;
}

function simpleMarkdownToHtml(text) {
    // Basic replacements for markdown-like syntax often returned by LLMs
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`([^`]+)`/g, '<code class="bg-gray-200 text-sm rounded px-1 py-0.5">$1</code>')
        .replace(/```python\n([\s\S]*?)```/g, '<pre class="bg-gray-800 text-white p-3 my-2 rounded-md overflow-x-auto text-sm"><code>$1</code></pre>')
        .replace(/\n/g, '<br>');
}
// --- DATA ---
const lessonData = [
    { id: 1, category: "Python Basics", title: "What is Programming?", summary: "Understanding the fundamental concept of programming.", concepts: `<ul><li><strong>Communication with Computers:</strong> Just like we use languages like English or Hindi to communicate with each other, we use a programming language to communicate with a computer.</li><li><strong>Giving Instructions:</strong> Programming is the way we provide a set of instructions for a computer to perform various tasks.</li></ul>`, code: null },
    { id: 2, category: "Python Basics", title: "What is Python?", summary: "An introduction to the Python language and its key features.", concepts: `<ul><li><strong>Simple & Easy:</strong> Python is a simple and easy-to-understand language that reads like simple English. This makes it easy for beginners to learn.</li><li><strong>Key Features:</strong><ul><li>Easy to understand = Less development time</li><li>Free and open source</li><li>High-level language (abstracts away computer complexity)</li><li>Portable (works on Windows, Mac, Linux)</li></ul></li><li><strong>Installation:</strong> Python can be easily installed from the official website python.org.</li></ul>`, code: null },
    { id: 3, category: "Python Basics", title: "Modules, Comments & Pip", summary: "Using pre-written code, documenting your work, and installing packages.", concepts: `<ul><li><strong>Module:</strong> A file containing code written by someone else that can be imported and used in our programs. There are built-in modules (e.g., \`os\`) and external modules.</li><li><strong>Pip:</strong> The Package Installer for Python. It's a command-line tool used to install external modules from the Python Package Index (PyPI).</li><li><strong>Comments:</strong> Notes in code that are ignored by Python. They are used for explanation.<ul><li><strong>Single-line:</strong> Starts with <code>#</code>.</li><li><strong>Multi-line:</strong> Enclosed in triple quotes <code>'''...'''</code> or <code>"""..."""</code>.</li></ul></li></ul>`, code: `# To install a package like 'flask', open your terminal and type:\n# pip install flask\n\nimport os # Importing a built-in module\n\n# This is a single-line comment.\n'''\nThis is a multi-line comment.\nIt is useful for longer explanations.\n'''\n\nprint(os.getcwd()) # Get current working directory` },
    { id: 4, category: "Python Basics", title: "Using Python as a Calculator (REPL)", summary: "Using Python's interactive mode for quick calculations.", concepts: `<ul><li><strong>REPL:</strong> Stands for Read-Evaluate-Print Loop. It's an interactive shell that executes Python code one line at a time.</li><li><strong>How to start:</strong> Open your terminal or command prompt and type <code>python</code>.</li></ul>`, code: `# In the Python REPL, you can type expressions directly:\n# >>> 3 + 5\n# 8\n# >>> 10 * 2\n# 20` },
    { id: 5, category: "Python Basics", title: "Variables and Data Types", summary: "Storing data in variables and understanding Python's basic data types.", concepts: `<ul><li><strong>Variable:</strong> A name given to a memory location to store a value. It's like a container.</li><li><strong>Data Types:</strong> Python automatically identifies the data type. Primary types include:<ul><li><code>int</code>: Integers (e.g., 30, -5).</li><li><code>float</code>: Floating-point numbers (e.g., 71.22).</li><li><code>str</code>: Strings (text, e.g., "Harry").</li><li><code>bool</code>: Booleans (<code>True</code> or <code>False</code>).</li><li><code>None</code>: A special type representing the absence of a value.</li></ul></li><li><strong>Rules for Naming:</strong> Must start with a letter or underscore, can contain letters, numbers, and underscores. Cannot contain spaces.</li></ul>`, code: 'a = 30          # int\nb = "Harry"       # str\nc = 71.22         # float\n\n# The type() function shows a variable\'s data type\nprint(f"The type of b is: {type(b)}")' },
    { id: 6, category: "Python Basics", title: "Operators", summary: "Using symbols for arithmetic, assignment, comparison, and logical operations.", concepts: `<ul><li><strong>Arithmetic Operators:</strong> <code>+</code> (add), <code>-</code> (subtract), <code>*</code> (multiply), <code>/</code> (divide), <code>%</code> (modulus/remainder), <code>**</code> (exponent), <code>//</code> (floor division).</li><li><strong>Assignment Operators:</strong> <code>=</code>, <code>+=</code>, <code>-=</code>, etc.</li><li><strong>Comparison Operators:</strong> <code>==</code> (equal to), <code>!=</code> (not equal), <code>></code>, <code><</code>, <code>>=</code>, <code><=</code>.</li><li><strong>Logical Operators:</strong> <code>and</code>, <code>or</code>, <code>not</code>.</li></ul>`, code: `a = 15\nb = 4\nprint(f"a + b = {a + b}")\nprint(f"Remainder of a / b = {a % b}")\n\n# Comparison\nis_equal = (a == b)\nprint(f"Are a and b equal? {is_equal}")` },
    { id: 7, category: "Python Basics", title: "Typecasting", summary: "Explicitly converting variables from one data type to another.", concepts: `<ul><li><strong>Conversion Functions:</strong> Use built-in functions like <code>int()</code>, <code>float()</code>, and <code>str()</code> to convert between types.</li><li><strong>Use Case:</strong> It's essential for user input, as the <code>input()</code> function always returns a string.</li></ul>`, code: 'a_str = "32"\nb_int = int(a_str) # Convert string to integer\nc_float = float(b_int) # Convert integer to float\n\nprint(f"String: {a_str}, Integer: {b_int}, Float: {c_float}")' },
    { id: 8, category: "Python Basics", title: "User Input", summary: "Making your programs interactive by getting input from the user.", concepts: `<ul><li><strong><code>input()</code> function:</strong> This function allows the user to provide input from the keyboard.</li><li><strong>Return Type:</strong> The output of <code>input()</code> is always a <strong>string</strong>, even if the user enters a number. You must typecast it if you need to perform calculations.</li></ul>`, code: `name = input("Enter your name: ")\nage_str = input("Enter your age: ")\n\n# Convert age to integer for calculations\nage_int = int(age_str)\n\nprint(f"Hello, {name}! You will be {age_int + 1} years old next year.")` },
    { id: 9, category: "Strings", title: "String Basics", summary: "Understanding what strings are and how they are created.", concepts: `<ul><li><strong>Definition:</strong> A string is a data type representing a sequence of characters.</li><li><strong>Creation:</strong> Strings can be enclosed in single quotes (<code>'...'</code>), double quotes (<code>"..."</code>), or triple quotes (<code>'''...'''</code> or <code>"""..."""</code>). Triple quotes are used for multi-line strings.</li></ul>`, code: 'single_quoted = \'Harry\'\ndouble_quoted = "Harry"\ntriple_quoted = """Harry is a good boy\nand a programmer."""\nprint(triple_quoted)' },
    { id: 10, category: "Strings", title: "String Slicing & Indexing", summary: "Accessing parts of strings using indexes and slices.", concepts: `<ul><li><strong>Indexing:</strong> Access individual characters. Indexing starts at <code>0</code>.</li><li><strong>Negative Indexing:</strong> Access characters from the end. <code>-1</code> is the last character, <code>-2</code> is the second to last, etc.</li><li><strong>Slicing <code>[start:stop]</code>:</strong> Extracts a substring. The <code>start</code> index is included, but the <code>stop</code> index is not.</li><li><strong>Slicing with Skip <code>[start:stop:step]</code>:</strong> Extracts characters with a given step value.</li></ul>`, code: 'name = "Harry"\n# H a r r y\n# 0 1 2 3 4\n# -5-4-3-2-1\n\nprint(name[0:3]) # Prints "Har"\nprint(name[-4:-1]) # Prints "arr"\n\nword = "amazing"\nprint(word[1:6:2]) # Prints "mzn"' },
    { id: 11, category: "Strings", title: "String Methods", summary: "Using built-in functions to manipulate and analyze strings.", concepts: `<ul><li><strong><code>len(string)</code>:</strong> Returns the length of the string.</li><li><strong><code>string.endswith("...")</code>:</strong> Checks if the string ends with a specific substring.</li><li><strong><code>string.count("c")</code>:</strong> Counts occurrences of a character or substring.</li><li><strong><code>string.capitalize()</code>:</strong> Capitalizes the first character.</li><li><strong><code>string.find("word")</code>:</strong> Returns the index of the first occurrence of a word.</li><li><strong><code>string.replace("old", "new")</code>:</strong> Replaces all occurrences of a substring.</li></ul>`, code: 'story = "once upon a time"\nprint(len(story)) # 16\nprint(story.endswith("time")) # True\nprint(story.count("o")) # 2\nprint(story.capitalize()) # "Once upon a time"\nprint(story.replace("once", "twice")) # "twice upon a time"' },
    { id: 12, category: "Strings", title: "Escape Sequence Characters", summary: "Using special backslash characters to represent newlines, tabs, and quotes.", concepts: `<ul><li><strong>Definition:</strong> A sequence of characters that represents a single special character when used inside a string.</li><li><strong>Common Sequences:</strong><ul><li><code>\\n</code>: Newline</li><li><code>\\t</code>: Tab</li><li><code>\\'</code>: Single quote</li><li><code>\\\\</code>: Backslash</li></ul></li></ul>`, code: 'formatted_letter = "Dear Harry,\\n\\tThis Python Course is nice.\\nThanks!"\nprint(formatted_letter)' },
    { id: 13, category: "Functions & Data Structures", title: "Lists", summary: "Working with ordered, changeable collections of items.", concepts: `<ul><li><strong>Definition:</strong> A container to store a set of values of any data type. Created with square brackets <code>[]</code>.</li><li><strong>Mutable:</strong> Lists can be changed after they are created.</li><li><strong>Indexing & Slicing:</strong> Works the same way as strings.</li></ul>`, code: 'friends = ["Apple", "Akash", "Rohan", 7, False]\nprint(friends[0]) # "Apple"\nprint(friends[1:3]) # ["Akash", "Rohan"]' },
    { id: 14, category: "Functions & Data Structures", title: "List Methods", summary: "Modifying lists using built-in methods.", concepts: `<ul><li><strong><code>list.sort()</code>:</strong> Sorts the list in place.</li><li><strong><code>list.reverse()</code>:</strong> Reverses the list in place.</li><li><strong><code>list.append(item)</code>:</strong> Adds an item to the end of the list.</li><li><strong><code>list.insert(index, item)</code>:</strong> Inserts an item at a specific index.</li><li><strong><code>list.pop(index)</code>:</strong> Removes and returns the item at the given index.</li><li><strong><code>list.remove(item)</code>:</strong> Removes the first occurrence of the item.</li></ul>`, code: 'L1 = [1, 8, 7, 2, 21, 15]\nL1.sort()\nprint(L1) # [1, 2, 7, 8, 15, 21]\nL1.append(45)\nprint(L1) # [1, 2, 7, 8, 15, 21, 45]' },
    { id: 15, category: "Functions & Data Structures", title: "Tuples", summary: "Working with ordered, unchangeable collections of items.", concepts: `<ul><li><strong>Definition:</strong> An immutable data type created with parentheses <code>()</code>.</li><li><strong>Immutable:</strong> Once a tuple is defined, its elements cannot be altered or manipulated.</li><li><strong>Note:</strong> A tuple with a single element needs a trailing comma: <code>(1,)</code>.</li></ul>`, code: 't = (1, 7, 2)\n# The following line would raise a TypeError:\n# t[0] = 5\nprint(t)' },
    { id: 16, category: "Functions & Data Structures", title: "Tuple Methods", summary: "Using the few available methods for tuples.", concepts: `<ul><li>Since tuples are immutable, they have very few methods.</li><li><strong><code>tuple.count(item)</code>:</strong> Returns the number of times an item occurs.</li><li><strong><code>tuple.index(item)</code>:</strong> Returns the index of the first occurrence of an item.</li></ul>`, code: 'a = (1, 7, 2, 7)\nprint(a.count(7)) # 2\nprint(a.index(2)) # 2' },
    { id: 17, category: "Functions & Data Structures", title: "Dictionaries", summary: "Storing data in key-value pairs.", concepts: `<ul><li><strong>Definition:</strong> A collection of key-value pairs, created with curly braces <code>{key: value}</code>.</li><li><strong>Properties:</strong> Dictionaries are unordered, mutable (changeable), and indexed by keys. Keys must be unique and immutable.</li></ul>`, code: `my_dict = {\n    "harry": "Code",\n    "marks": 100,\n    "list": [1, 2, 9]\n}\nprint(my_dict["harry"]) # "Code"\nprint(my_dict["list"]) # [1, 2, 9]` },
    { id: 18, category: "Functions & Data Structures", title: "Dictionary Methods", summary: "Using built-in methods to work with dictionaries.", concepts: `<ul><li><strong><code>dict.items()</code>:</strong> Returns a list of (key, value) tuples.</li><li><strong><code>dict.keys()</code>:</strong> Returns a list of all keys.</li><li><strong><code>dict.values()</code>:</strong> Returns a list of all values.</li><li><strong><code>dict.update({key: value})</code>:</strong> Adds or updates key-value pairs.</li><li><strong><code>dict.get(key)</code>:</strong> Safely gets a value by key. Returns <code>None</code> if the key doesn't exist, preventing an error.</li></ul>`, code: `marks = {"Harry": 92, "Rohan": 98}\nprint(list(marks.keys())) # ["Harry", "Rohan"]\n\nmarks.update({"Shubham": 95})\nprint(marks)\n\nprint(marks.get("Rohan")) # 98` },
    { id: 19, category: "Functions & Data Structures", title: "Sets", summary: "Using unordered collections of unique, non-repetitive items.", concepts: `<ul><li><strong>Definition:</strong> A collection of non-repetitive elements, created with <code>set()</code> or curly braces <code>{}</code>. Note: <code>{}</code> alone creates an empty dictionary, not a set.</li><li><strong>Properties:</strong> Sets are unordered, unindexed, and do not allow duplicate values.</li></ul>`, code: 's = {1, 8, 2, 3, 3}\nprint(s) # {1, 2, 3, 8}\n\n# Creating an empty set\nempty_set = set()\nempty_set.add(1)\nprint(empty_set) # {1}' },
    { id: 20, category: "Functions & Data Structures", title: "Set Operations", summary: "Performing mathematical operations on sets.", concepts: `<ul><li><strong><code>len(s)</code>:</strong> Returns the length of the set.</li><li><strong><code>s.remove(item)</code>:</strong> Removes an item (raises an error if not found).</li><li><strong><code>s.pop()</code>:</strong> Removes and returns an arbitrary element.</li><li><strong><code>s.clear()</code>:</strong> Empties the set.</li><li><strong><code>s.union(other)</code> or <code>s | other</code>:</strong> Returns a new set with all items from both.</li><li><strong><code>s.intersection(other)</code> or <code>s & other</code>:</strong> Returns a new set with items present in both.</li></ul>`, code: 's1 = {1, 8, 2, 3}\ns2 = {2, 3, 11}\n\nprint(s1.union(s2)) # {1, 2, 3, 8, 11}\nprint(s1.intersection(s2)) # {2, 3}' },
    { id: 21, category: "Control Flow", title: "Conditional Expressions", summary: "Making decisions in your code with if, elif, and else.", concepts: `<ul><li><strong>Purpose:</strong> Allows the program to execute instructions based on whether a condition is met.</li><li><strong><code>if (condition):</code>:</strong> Executes the indented code if the condition is true.</li><li><strong><code>elif (condition):</code>:</strong> Used to check multiple other conditions.</li><li><strong><code>else:</code>:</strong> Executes if all preceding <code>if</code> and <code>elif</code> conditions are false.</li></ul>`, code: 'a = 22\nif (a > 9):\n    print("Greater")\nelse:\n    print("Lesser")' },
    { id: 22, category: "Control Flow", title: "Relational & Logical Operators", summary: "Using operators to create complex conditions.", concepts: `<ul><li><strong>Relational Operators:</strong> Used to evaluate conditions. Includes <code>==</code>, <code>>=</code>, <code><=</code>, <code>></code>, <code><</code>, <code>!=</code>.</li><li><strong>Logical Operators:</strong> Used to combine conditional statements.<ul><li><strong><code>and</code>:</strong> True only if both operands are true.</li><li><strong><code>or</code>:</strong> True if at least one operand is true.</li><li><strong><code>not</code>:</strong> Inverts the boolean value.</li></ul></li></ul>`, code: 'age = 25\nif (age > 20 and age < 30):\n    print("You are in your 20s!")' },
    { id: 23, category: "Control Flow", title: "While Loops", summary: "Repeating a block of code as long as a condition is true.", concepts: `<ul><li><strong>Syntax:</strong> <code>while condition: # Body of loop</code></li><li><strong>Execution Flow:</strong> The condition is checked first. If it's true, the body is executed. This process repeats until the condition becomes false.</li><li><strong>Infinite Loop:</strong> If the condition never becomes false, the loop will run forever.</li></ul>`, code: 'i = 0\nwhile i < 5:\n    print("Harry")\n    i = i + 1' },
    { id: 24, category: "Control Flow", title: "For Loops", summary: "Iterating through a sequence like a list, tuple, or string.", concepts: `<ul><li><strong>Syntax:</strong> <code>for item in sequence: # Body of loop</code></li><li><strong><code>range()</code> function:</strong> Used to generate a sequence of numbers to loop through. Syntax: <code>range(start, stop, step-size)</code>.</li></ul>`, code: 'l = [1, 7, 8]\nfor item in l:\n    print(item)\n\n# Using range\nfor i in range(5): # From 0 up to (but not including) 5\n    print(i)' },
    { id: 25, category: "Control Flow", title: "Loop Control Statements", summary: "Using `break`, `continue`, and `pass` to control loop behavior.", concepts: `<ul><li><strong><code>break</code>:</strong> Immediately terminates the current loop.</li><li><strong><code>continue</code>:</strong> Skips the current iteration and proceeds to the next one.</li><li><strong><code>pass</code>:</strong> A null statement that does nothing. It's used as a placeholder where code is syntactically required but no action is needed.</li></ul>`, code: 'for i in range(10):\n    if i == 3:\n        continue # Skip printing 3\n    if i == 7:\n        break # Stop the loop at 7\n    print(i)' },
    { id: 26, category: "Control Flow", title: "For Loop with `else`", summary: "Executing a block of code when a for loop completes without hitting a `break`.", concepts: `<ul><li><strong>Purpose:</strong> The <code>else</code> block is executed only if the loop finishes its full iteration naturally.</li><li><strong>Use Case:</strong> Useful for search operations. The <code>else</code> block can signify that the item was not found.</li></ul>`, code: 'l = [1, 7, 8]\nfor item in l:\n    print(item)\nelse:\n    print("Done") # This is printed when the loop completes.' },
    { id: 27, category: "Functions & Data Structures", title: "Functions", summary: "Creating named, reusable blocks of code to perform specific tasks.", concepts: `<ul><li><strong>Definition:</strong> A group of statements performing a specific task. Use the <code>def</code> keyword.</li><li><strong>Reusability:</strong> Functions help implement the DRY (Don't Repeat Yourself) principle.</li><li><strong>Function Call:</strong> Execute a function by writing its name followed by parentheses, e.g., <code>func1()</code>.</li></ul>`, code: 'def greet(name):\n    print(f"Good Day, {name}")\n\ngreet("Harry")' },
    { id: 28, category: "Functions & Data Structures", title: "Function Arguments & Return", summary: "Passing data into functions and getting values back.", concepts: `<ul><li><strong>Arguments:</strong> A function can accept values to work with. These are placed in the parentheses.</li><li><strong>Default Parameter Value:</strong> You can provide a default value for an argument, which is used if no value is passed.</li><li><strong><code>return</code> Statement:</strong> A function can send a value back to the caller.</li></ul>`, code: 'def my_sum(a, b, c=0): # c has a default value\n    return a + b + c\n\nresult = my_sum(5, 10)\nprint(result) # 15' },
    { id: 29, category: "Functions & Data Structures", title: "Recursion", summary: "Solving problems by creating functions that call themselves.", concepts: `<ul><li><strong>Concept:</strong> A function that calls itself to solve a problem based on a mathematical formula.</li><li><strong>Base Case:</strong> A condition that stops the recursion to prevent an infinite loop.</li><li><strong>Recursive Step:</strong> The part where the function calls itself, usually with a modified argument to move closer to the base case.</li></ul>`, code: 'def factorial(n):\n    if n == 0 or n == 1: # Base Case\n        return 1\n    else: # Recursive Step\n        return n * factorial(n - 1)\n\nprint(f"5! is {factorial(5)}")' },
    { id: 30, category: "File Handling", title: "File I/O Basics", summary: "Reading from and writing to files on your computer.", concepts: `<ul><li><strong>Why Files?:</strong> RAM is volatile. To persist data, we store it in files on a non-volatile device like a hard drive.</li><li><strong>File Types:</strong> Text files (.txt, .py) and Binary files (.jpg, .dat).</li><li><strong><code>open()</code> function:</strong> The built-in function to open a file. It takes two parameters: filename and mode.</li></ul>`, code: '# f = open("this.txt", "r")\n# The above line opens the file in read mode.' },
    { id: 31, category: "File Handling", title: "File Modes", summary: "Understanding the different modes for opening a file.", concepts: `<ul><li><strong><code>'r'</code>:</strong> Read mode (default). Throws an error if the file doesn't exist.</li><li><strong><code>'w'</code>:</strong> Write mode. Creates a new file or overwrites an existing one.</li><li><strong><code>'a'</code>:</strong> Append mode. Creates a new file or adds content to the end of an existing one.</li><li><strong><code>'+'</code>:</strong> Update mode (read and write).</li><li>Append <strong><code>'b'</code></strong> for binary mode (e.g., <code>'rb'</code>) or <strong><code>'t'</code></strong> for text mode (e.g., <code>'rt'</code>).</li></ul>`, code: 'f = open("another.txt", "w")\nf.write("Please write this to the file.")\nf.close()' },
    { id: 32, category: "File Handling", title: "Reading & Writing Methods", summary: "Using methods to interact with file content.", concepts: `<ul><li><strong>Reading:</strong><ul><li><strong><code>f.read()</code>:</strong> Reads the entire file content. Can take an argument for number of characters.</li><li><strong><code>f.readline()</code>:</strong> Reads one full line at a time.</li></ul></li><li><strong>Writing:</strong><ul><li><strong><code>f.write("...")</code>:</strong> Writes a string to the file. Can be called multiple times.</li></ul></li><li><strong>Closing:</strong> Always close a file with <strong><code>f.close()</code></strong> to free up resources.</li></ul>`, code: 'f = open("this.txt", "r")\ntext = f.read()\nprint(text)\nf.close()' },
    { id: 33, category: "File Handling", title: "The `with` Statement", summary: "The best practice for opening files, as it handles closing automatically.", concepts: `<ul><li><strong>Automatic Closing:</strong> The <code>with</code> statement ensures that the file is properly closed, even if errors occur within the block.</li><li><strong>Syntax:</strong> <code>with open(...) as f: # do stuff</code></li><li>You do not need to call <code>f.close()</code> when using a <code>with</code> block.</li></ul>`, code: 'with open("this.txt", "r") as f:\n    content = f.read()\n# The file is automatically closed here.\nprint(content)' },
    { id: 34, category: "Object-Oriented Programming (OOP)", title: "Intro to OOP", summary: "Understanding the paradigm of solving problems by creating objects.", concepts: `<ul><li><strong>Paradigm:</strong> A popular approach to programming that focuses on using reusable code (implements DRY principle).</li><li><strong>Class:</strong> A blueprint for creating objects. It defines attributes and methods.</li><li><strong>Object:</strong> An instantiation of a class. Memory is allocated when an object is created.</li><li><strong>Abstraction & Encapsulation:</strong> Objects hide implementation details from the user.</li></ul>`, code: 'class RailwayForm:\n    formType = "RailwayForm"\n    def printData(self):\n        print(f"Name is {self.name}")\n        print(f"Train is {self.train}")\n\nharrysApplication = RailwayForm()\nharrysApplication.name = "Harry"\nharrysApplication.train = "Rajdhani Express"\nharrysApplication.printData()' },
    { id: 35, category: "Object-Oriented Programming (OOP)", title: "Class & Instance Attributes", summary: "Distinguishing between attributes that belong to the class and to an object instance.", concepts: `<ul><li><strong>Class Attribute:</strong> An attribute that belongs to the class itself, shared by all instances. E.g., a company name for all employees.</li><li><strong>Instance Attribute:</strong> An attribute that belongs to a specific instance (object). E.g., an employee's name.</li><li><strong>Precedence:</strong> Instance attributes take preference over class attributes during assignment and retrieval.</li></ul>`, code: 'class Employee:\n    company = "Google" # Class attribute\n\nharry = Employee()\nprint(harry.company) # "Google"\n\n# Changing the class attribute affects all instances\nEmployee.company = "YouTube"\nprint(harry.company) # "YouTube"' },
    { id: 36, category: "Object-Oriented Programming (OOP)", title: "The `self` Parameter", summary: "Understanding the `self` parameter which refers to the current instance of the class.", concepts: `<ul><li><strong>Reference to Instance:</strong> <code>self</code> refers to the specific instance of the class on which a method is being called.</li><li><strong>Automatic Passing:</strong> It is automatically passed as the first argument when you call a method from an object. <code>harry.getSalary()</code> is equivalent to <code>Employee.getSalary(harry)</code>.</li></ul>`, code: 'class Employee:\n    company = "Google"\n    def getSalary(self):\n        # self refers to the instance, e.g., \'harry\'\n        print(f"Salary for {self.name} is {self.salary}")\n\nharry = Employee()\nharry.name = "Harry"\nharry.salary = "100K"\nharry.getSalary()' },
    { id: 37, category: "Object-Oriented Programming (OOP)", title: "Constructors (`__init__`)", summary: "Using the special `__init__` method to initialize object attributes.", concepts: `<ul><li><strong>Special Method:</strong> <code>__init__()</code> is a special method that is run as soon as an object is created.</li><li><strong>Constructor:</strong> It is also known as a constructor.</li><li><strong>Purpose:</strong> It takes <code>self</code> as the first argument and can take other arguments to set the initial state of the object.</li></ul>`, code: 'class Employee:\n    def __init__(self, name, salary):\n        self.name = name\n        self.salary = salary\n        print("Employee has been created!")\n\n    def getDetails(self):\n        print(f"Name: {self.name}, Salary: {self.salary}")\n\nharry = Employee("Harry", "100K")\nharry.getDetails()' },
    { id: 38, category: "Object-Oriented Programming (OOP)", title: "Static Methods", summary: "Creating methods that belong to a class but do not use the `self` parameter.", concepts: `<ul><li><strong>No Instance Needed:</strong> A static method doesn't operate on a specific instance of the class.</li><li><strong><code>@staticmethod</code> Decorator:</strong> Use this decorator to mark a method as static.</li><li><strong>Use Case:</strong> Useful for utility functions that are related to the class but don't need access to instance data.</li></ul>`, code: 'class Employee:\n    @staticmethod\n    def greet():\n        print("Good morning, user!")\n\nEmployee.greet()' },
    { id: 39, category: "Object-Oriented Programming (OOP)", title: "Inheritance", summary: "Creating a new class (child) from an existing class (parent).", concepts: `<ul><li><strong>Concept:</strong> A way of creating a new class that inherits the methods and attributes of an existing class.</li><li><strong>Syntax:</strong> <code>class ChildClass(ParentClass): ...</code></li><li><strong>Benefit:</strong> Promotes code reusability. Child classes can also override or add their own methods and attributes.</li></ul>`, code: 'class Employee: # Base Class\n    company = "Google"\n\nclass Programmer(Employee): # Derived Class\n    language = "Python"\n\np = Programmer()\nprint(p.company) # "Google" (inherited)\nprint(p.language) # "Python"' },
    { id: 40, category: "Object-Oriented Programming (OOP)", title: "Types of Inheritance", summary: "Exploring single, multiple, and multilevel inheritance structures.", concepts: `<ul><li><strong>Single Inheritance:</strong> A child class inherits from a single parent class. (A -> B)</li><li><strong>Multiple Inheritance:</strong> A child class inherits from more than one parent class. (A, B -> C)</li><li><strong>Multilevel Inheritance:</strong> A child class becomes a parent for another child class. (A -> B -> C)</li></ul>`, code: '# Multilevel Inheritance Example\nclass Animal:\n    pass\n\nclass Pet(Animal):\n    pass\n\nclass Dog(Pet):\n    pass' },
    { id: 41, category: "Object-Oriented Programming (OOP)", title: "The `super()` Method", summary: "Accessing methods of the parent (super) class from the child class.", concepts: `<ul><li><strong>Purpose:</strong> Used to call the methods of the base class. This is useful for extending the functionality of an inherited method without completely overriding it.</li><li><strong>Common Use:</strong> Calling the parent class's constructor (<code>super().__init__()</code>) from the child's constructor.</li></ul>`, code: 'class Person:\n    def __init__(self):\n        print("Initializing Person...")\n\nclass Employee(Person):\n    def __init__(self):\n        super().__init__() # Call parent constructor\n        print("Initializing Employee...")\n\nemp = Employee()' },
    { id: 42, category: "Object-Oriented Programming (OOP)", title: "Class Methods", summary: "Creating methods that are bound to the class, not the object.", concepts: `<ul><li><strong><code>@classmethod</code> Decorator:</strong> Used to create a class method.</li><li><strong><code>cls</code> Parameter:</strong> A class method takes <code>cls</code> as its first argument, which refers to the class itself, not the instance.</li><li><strong>Use Case:</strong> Useful for methods that work with the class, such as factory methods for creating instances in a specific way.</li></ul>`, code: 'class Employee:\n    company = "Google"\n    @classmethod\n    def changeCompany(cls, newCompany):\n        cls.company = newCompany\n\ne = Employee()\nprint(e.company) # "Google"\n\nEmployee.changeCompany("Tesla")\nprint(e.company) # "Tesla"' },
    { id: 43, category: "Object-Oriented Programming (OOP)", title: "Property Decorator (Getters & Setters)", summary: "Using `@property` to create managed attributes.", concepts: `<ul><li><strong>Getter (\`@property\`):</strong> A method that retrieves the value of an attribute. It allows you to access the method as if it were an attribute (e.g., \`e.name\` instead of \`e.name()\`).</li><li><strong>Setter (\`@name.setter\`):</strong> A method that sets the value of an attribute. This is where you can add validation logic.</li></ul>`, code: 'class Employee:\n    def __init__(self, name):\n        self._name = name\n    \n    @property\n    def name(self):\n        return self._name\n\n    @name.setter\n    def name(self, value):\n        if len(value) > 10:\n            raise ValueError("Name is too long")\n        self._name = value\n\ne = Employee("Harry")\nprint(e.name)\n# e.name = "ThisNameIsWayTooLong" # Would raise ValueError' },
    { id: 44, category: "Object-Oriented Programming (OOP)", title: "Operator Overloading", summary: "Defining how standard operators work with your custom objects.", concepts: `<ul><li><strong>Dunder Methods:</strong> Operators are overloaded using special "dunder" (double underscore) methods.</li><li><strong>Examples:</strong><ul><li><code>+</code> is overloaded by <code>__add__(self, other)</code></li><li><code>-</code> is overloaded by <code>__sub__(self, other)</code></li><li><code>*</code> is overloaded by <code>__mul__(self, other)</code></li></ul></li><li><strong>Benefit:</strong> Allows for more intuitive code (e.g., <code>v1 + v2</code> for vectors).</li></ul>`, code: 'class Number:\n    def __init__(self, num):\n        self.num = num\n    \n    def __add__(self, other):\n        return self.num + other.num\n\nn1 = Number(4)\nn2 = Number(6)\nprint(n1 + n2) # 10' },
    { id: 45, category: "Object-Oriented Programming (OOP)", title: "Other Dunder Methods", summary: "Exploring other useful magic methods like `__str__` and `__len__`.", concepts: `<ul><li><strong>Dunder:</strong> Double Underscore methods.</li><li><strong><code>__str__</code>:</strong> Defines the string representation for <code>print()</code>.</li><li><strong><code>__len__</code>:</strong> Defines the behavior for <code>len()</code>.</li></ul>`, code: 'class Vector:\n    def __init__(self, vec):\n        self.vec = vec\n    \n    def __str__(self):\n        return f"Vector: {self.vec}"\n\n    def __len__(self):\n        return len(self.vec)\n\nv = Vector([1, 2, 3])\nprint(v) # Vector: [1, 2, 3]\nprint(len(v)) # 3' },
    { id: 46, category: "Advanced Concepts", title: "Exception Handling", summary: "Managing errors gracefully using `try...except` blocks.", concepts: `<ul><li><strong>Purpose:</strong> To handle runtime errors (exceptions) and prevent the program from crashing.</li><li><strong><code>try</code> block:</strong> Code that might raise an exception is placed here.</li><li><strong><code>except</code> block:</strong> If an exception occurs in the <code>try</code> block, the corresponding <code>except</code> block is executed.</li><li>You can specify the type of exception to catch, e.g., <code>except ValueError:</code>.</li></ul>`, code: 'try:\n    a = int(input("Enter a number: "))\n    print(a)\nexcept ValueError as e:\n    print(f"Invalid input! Please enter an integer. Error: {e}")' },
    { id: 47, category: "Advanced Concepts", title: "Exception Handling with `else` and `finally`", summary: "Using the optional `else` and `finally` clauses.", concepts: `<ul><li><strong><code>else</code> clause:</strong> This block of code is executed only if the <code>try</code> block was successful (no exceptions were raised).</li><li><strong><code>finally</code> clause:</strong> This block of code is always executed, regardless of whether an exception occurred or not. It's used for cleanup actions like closing files.</li></ul>`, code: 'try:\n    f = open("file.txt", "r")\nexcept FileNotFoundError:\n    print("File not found.")\nelse:\n    print("File opened successfully.")\n    f.close()\nfinally:\n    print("Executing finally... This always runs.")' },
    { id: 48, category: "Advanced Concepts", title: "The `if __name__ == '__main__'` block", summary: "Controlling code execution based on whether a file is run directly or imported.", concepts: `<ul><li><strong><code>__name__</code> variable:</strong> A special variable that evaluates to the name of the module.</li><li><strong>Behavior:</strong> If the module is being run directly, <code>__name__</code> is set to <code>"__main__"</code>. If it's imported, <code>__name__</code> is set to the module's filename.</li><li><strong>Purpose:</strong> Allows you to write code that only runs when the file is executed as a script, not when it's imported as a module.</li></ul>`, code: 'def some_function():\n    print("This function can be imported.")\n\nif __name__ == "__main__":\n    print("This script was run directly.")\n    some_function()' },
    { id: 49, category: "Advanced Concepts", title: "Global Keyword & `enumerate`", summary: "Modifying global variables and iterating with a counter.", concepts: `<ul><li><strong><code>global</code> keyword:</strong> Used inside a function to modify a variable that is defined in the global scope.</li><li><strong><code>enumerate</code> function:</strong> Adds a counter to an iterable. It's an elegant way to get both the index and the item during a loop.</li></ul>`, code: 'a = 10 # global variable\ndef modify_global():\n    global a\n    a = 50\nmodify_global()\nprint(a) # 50\n\nmy_list = ["apple", "banana", "cherry"]\nfor index, fruit in enumerate(my_list):\n    print(index, fruit)' },
    { id: 50, category: "Advanced Concepts", title: "List Comprehensions", summary: "An elegant and concise way to create lists based on existing lists.", concepts: `<ul><li><strong>Syntax:</strong> <code>[expression for item in iterable if condition]</code></li><li><strong>Benefit:</strong> Often more readable and faster than creating the same list with a traditional for loop and an append.</li></ul>`, code: 'list1 = [1, 7, 12, 11, 22]\n# Create a new list with items from list1 that are greater than 8\nlist2 = [item for item in list1 if item > 8]\nprint(list2) # [12, 11, 22]' },
    { id: 51, category: "Modules & Libraries", title: "Virtual Environments", summary: "Isolating project dependencies from the main system installation.", concepts: `<ul><li><strong>Purpose:</strong> An environment that is the same as the system interpreter but is isolated from other Python environments on the system.</li><li><strong>Installation:</strong> <code>pip install virtualenv</code></li><li><strong>Creation:</strong> <code>virtualenv myprojectenv</code></li><li><strong>Activation:</strong> You must activate the environment to use it.</li><li><strong><code>pip freeze</code>:</strong> Lists all installed packages and their versions in the current environment. Use <code>pip freeze > requirements.txt</code> to save them.</li></ul>`, code: '# In your terminal:\n# pip install -r requirements.txt' },
    { id: 52, category: "Functional Programming", title: "Lambda Functions", summary: "Creating small, anonymous functions using the `lambda` keyword.", concepts: `<ul><li><strong>Anonymous Function:</strong> A function created without a name.</li><li><strong>Syntax:</strong> <code>lambda arguments: expression</code></li><li><strong>Use Case:</strong> Often used as a quick, one-line function passed as an argument to other functions like <code>map</code> or <code>filter</code>.</li></ul>`, code: 'square = lambda x: x * x\nprint(square(6)) # 36\n\nsum_three = lambda a, b, c: a + b + c\nprint(sum_three(1, 2, 3)) # 6' },
    { id: 53, category: "Functional Programming", title: "The `join()` Method", summary: "Creating a single string from an iterable of strings.", concepts: `<ul><li><strong>Syntax:</strong> <code>"separator".join(iterable)</code></li><li>It concatenates the elements of the iterable, with the separator string placed between each element.</li></ul>`, code: 'l = ["apple", "mango", "banana"]\nprint(", ".join(l)) # "apple, mango, banana"\nprint(" and ".join(l)) # "apple and mango and banana"' },
    { id: 54, category: "Functional Programming", title: "The `format()` Method", summary: "A versatile way to format strings with placeholder values.", concepts: `<ul><li><strong>Syntax:</strong> <code>"template {0} {1}".format(arg0, arg1)</code></li><li>It allows for positional and keyword-based formatting, offering more control than f-strings in some cases.</li></ul>`, code: 'template = "{} is a good {}"\nprint(template.format("Harry", "boy")) # "Harry is a good boy"\n\n# Using indices\nprint("{1} is a good {0}".format("Harry", "boy")) # "boy is a good Harry"' },
    { id: 55, category: "Functional Programming", title: "Map, Filter & Reduce", summary: "Applying functions to sequences in a concise way.", concepts: `<ul><li><strong><code>map(function, iterable)</code>:</strong> Applies a function to every item of an iterable and returns a map object (which can be converted to a list).</li><li><strong><code>filter(function, iterable)</code>:</strong> Creates a list of items for which the function returns <code>True</code>.</li><li><strong><code>reduce(function, iterable)</code>:</strong> Applies a rolling computation to sequential pairs of values in a list. It needs to be imported from <code>functools</code>.</li></ul>`, code: 'from functools import reduce\n\n# Map\nnums = [1, 2, 3, 4]\nsquares = list(map(lambda x: x*x, nums))\nprint(squares) # [1, 4, 9, 16]\n\n# Filter\nevens = list(filter(lambda x: x % 2 == 0, nums))\nprint(evens) # [2, 4]\n\n# Reduce\nsum_all = reduce(lambda x, y: x + y, nums)\nprint(sum_all) # 10' }
];

// --- DOM ELEMENTS ---
const contentContainer = document.getElementById('content-container');
const sidebarNav = document.getElementById('sidebar-nav');
const modal = document.getElementById('lesson-modal');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const geminiControls = document.getElementById('gemini-controls');
const geminiResponseContainer = document.getElementById('gemini-response');
const modalScrollContainer = document.getElementById('modal-scroll-container');


// --- INITIALIZATION ---

// Group lessons by category for easier rendering
const categories = lessonData.reduce((acc, lesson) => {
    (acc[lesson.category] = acc[lesson.category] || []).push(lesson);
    return acc;
}, {});

// Generate Category Navigation and Content Sections
Object.keys(categories).forEach(category => {
    const safeId = category.replace(/[^a-zA-Z0-9]+/g, '-');

    // Create sidebar navigation link
    const navLink = document.createElement('a');
    navLink.href = `#${safeId}`;
    navLink.textContent = category;
    navLink.className = 'sidebar-link block font-medium text-gray-600 rounded-lg px-4 py-2';
    navLink.dataset.target = safeId;
    sidebarNav.appendChild(navLink);

    // Create main content section for the category
    const section = document.createElement('section');
    section.id = safeId;
    section.className = 'mb-16';

    const introText = getCategoryIntro(category);

    section.innerHTML = `
        <h2 class="text-3xl font-bold text-gray-800 border-b-2 border-indigo-200 pb-2 mb-4">${category}</h2>
        <p class="text-gray-600 mb-8">${introText}</p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Lesson cards will be inserted here -->
        </div>
    `;

    const cardContainer = section.querySelector('.grid');

    // Create and append lesson cards for the category
    categories[category].sort((a, b) => a.id - b.id).forEach(lesson => {
        const card = document.createElement('div');
        card.className = 'lesson-card bg-white rounded-lg p-6 cursor-pointer border border-gray-200/80';
        card.dataset.id = lesson.id;
        card.innerHTML = `
            <h4 class="font-bold text-lg text-indigo-800">${lesson.title}</h4>
            <p class="text-gray-600 text-sm mt-2">${lesson.summary}</p>
        `;
        cardContainer.appendChild(card);
    });

    contentContainer.appendChild(section);
});

// --- HELPER FUNCTIONS ---

function getCategoryIntro(category) {
    const intros = {
        'Python Basics': 'Start your journey here. These lessons cover the fundamental building blocks of Python, from installation and variables to basic operators and getting user input.',
        'Strings': 'Text is a primary data type. Learn how to manipulate, slice, and use powerful built-in string methods to process textual data effectively.',
        'Control Flow': 'Control the execution path of your programs. These lessons cover how to make decisions with conditionals and repeat actions with loops.',
        'Functions & Data Structures': 'Organize your code with functions and store your data efficiently with Python\'s versatile built-in data structures like lists, tuples, sets, and dictionaries.',
        'File Handling': 'Learn how to make your programs persistent by reading from and writing to files on your system. Master different file modes and best practices.',
        'Object-Oriented Programming (OOP)': 'Structure complex applications with OOP. These lessons introduce classes, objects, inheritance, and other core principles for building scalable and maintainable code.',
        'Functional Programming': 'Explore a different programming paradigm. Learn to write concise, declarative code using lambda functions and tools like map, filter, and reduce.',
        'Advanced Concepts': 'Dive deeper into powerful Python features. Learn to handle errors gracefully, create elegant list comprehensions, and understand key concepts like scope and the `__main__` block.',
        'Modules & Libraries': 'Explore Python\'s rich ecosystem. Learn to use built-in and third-party modules to interact with the OS, manage project dependencies, and more.'
    };
    return intros[category] || 'Explore the lessons in this category.';
}


// --- EVENT LISTENERS & OBSERVERS ---

// Main content click listener for lesson cards
contentContainer.addEventListener('click', (e) => {
    const card = e.target.closest('.lesson-card');
    if (card) {
        const lessonId = parseInt(card.dataset.id);
        const lesson = lessonData.find(l => l.id === lessonId);
        if (lesson) {
            openModal(lesson);
        }
    }
});

// Sidebar navigation click listener for smooth scrolling
sidebarNav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Sidebar active link highlighting on scroll
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('#sidebar-nav a');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle('active', link.dataset.target === entry.target.id);
            });
        }
    });
}, { rootMargin: '-50% 0px -50% 0px' });

sections.forEach(section => observer.observe(section));


// --- MODAL FUNCTIONS ---

function openModal(lesson) {
    modalTitle.textContent = lesson.title;

    let bodyHtml = `<h4 class="font-semibold text-lg mb-2 text-gray-700">Key Concepts</h4>${lesson.concepts}`;

    if (lesson.code) {
        const codeHtml = lesson.code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        bodyHtml += `
            <h4 class="font-semibold text-lg mt-6 mb-2 text-gray-700">Example Code</h4>
            <div class="relative group">
                <pre class="bg-gray-800 text-white p-4 rounded-md overflow-x-auto text-sm"><code class="language-python">${codeHtml}</code></pre>
                <button class="copy-btn absolute top-2 right-2 bg-gray-600 text-white text-xs font-semibold py-1 px-2 rounded-md opacity-0 group-hover:opacity-100" onclick="copyCode(this)">Copy</button>
            </div>
        `;
    }

    modalBody.innerHTML = bodyHtml;

    // Render Gemini AI controls
    renderGeminiControls(lesson);

    // Show modal with animation
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.add('opacity-100');
        modal.querySelector('.modal-content').classList.add('scale-100');
        modal.querySelector('.modal-content').classList.remove('scale-95');
    }, 10);
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('opacity-100');
    modal.querySelector('.modal-content').classList.remove('scale-100');
    modal.querySelector('.modal-content').classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
    document.body.style.overflow = '';
}

function copyCode(button) {
    const code = button.previousElementSibling.querySelector('code').innerText;
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    button.textContent = 'Copied!';
    setTimeout(() => {
        button.textContent = 'Copy';
    }, 2000);
}


// --- GEMINI AI INTEGRATION ---

function renderGeminiControls(lesson) {
    geminiControls.innerHTML = ''; // Clear old buttons

    const buttons = [
        { text: 'Clarify Concept ✨', type: 'clarify', condition: true },
        { text: 'Explain Code ✨', type: 'explain', condition: !!lesson.code },
        { text: 'Generate Problem ✨', type: 'problem', condition: true }
    ];
    
    buttons.forEach(btnInfo => {
        if (btnInfo.condition) {
            const button = document.createElement('button');
            button.className = 'gemini-btn bg-indigo-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';
            button.innerHTML = btnInfo.text;
            button.onclick = () => handleGeminiRequest(btnInfo.type, lesson);
            geminiControls.appendChild(button);
        }
    });

    geminiResponseContainer.classList.add('hidden');
    geminiResponseContainer.innerHTML = '';
}


async function handleGeminiRequest(type, lesson) {
    let prompt = '';
    switch (type) {
        case 'explain':
            prompt = `You are an expert Python tutor. Explain the following Python code line by line for a beginner. Be clear, concise, and use simple terms. Format your response using basic HTML for readability (e.g., <p>, <strong>, <ul>, <li>).\n\nCode:\n\`\`\`python\n${lesson.code}\n\`\`\``;
            break;
        case 'clarify':
            prompt = `You are an expert Python tutor. Explain the concept of "${lesson.title}" in a very simple way for a beginner. Use a real-world analogy to make it easier to understand. Format your response using basic HTML for readability (e.g., <p>, <strong>, <ul>, <li>).\n\nKey points to cover are: ${lesson.concepts.replace(/<[^>]*>/g, ' ')}`;
            break;
        case 'problem':
            prompt = `You are an expert Python tutor. Generate a simple practice problem based on the Python concept of "${lesson.title}". The problem should be suitable for a beginner. Provide a clear problem description, one hint, and a solution. Format the response using basic HTML, and wrap the solution in a <details> tag so it's hidden by default.`;
            break;
    }

    geminiResponseContainer.innerHTML = '<div class="flex justify-center items-center h-full"><div class="loader"></div></div>';
    geminiResponseContainer.classList.remove('hidden');
    modalScrollContainer.scrollTop = modalScrollContainer.scrollHeight;

    try {
        const result = await callGeminiAPI(prompt);
        geminiResponseContainer.innerHTML = simpleMarkdownToHtml(result);
    } catch (error) {
        console.error("Gemini API Error:", error);
        geminiResponseContainer.innerHTML = `<p class="text-red-600"><strong>Sorry, something went wrong.</strong></p><p class="text-sm text-gray-600 mt-2">Please try again. If the problem persists, the API service may be temporarily unavailable.</p><p class="text-xs text-gray-500 mt-2">Error: ${error.message}</p>`;
    }
}

async function callGeminiAPI(prompt) {
    const apiKey = ""; // IMPORTANT: Leave this empty. The key will be provided by the environment.
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

    const payload = {
        contents: [{ "parts": [{ "text": prompt }] }]
    };

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`API call failed with status ${response.status}: ${errorBody}`);
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!text) {
        throw new Error("Received an empty or invalid response from the API.");
    }

    return text;
}

function simpleMarkdownToHtml(text) {
    // Basic replacements for markdown-like syntax often returned by LLMs
    return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/`([^`]+)`/g, '<code class="bg-gray-200 text-sm rounded px-1 py-0.5">$1</code>')
        .replace(/```python\n([\s\S]*?)```/g, '<pre class="bg-gray-800 text-white p-3 my-2 rounded-md overflow-x-auto text-sm"><code>$1</code></pre>')
        .replace(/\n/g, '<br>');
}
