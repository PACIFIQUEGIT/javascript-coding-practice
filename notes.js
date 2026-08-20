| Problem type                                   | Pattern / Data Structure      | Clue                                               |
| ---------------------------------------------- | ----------------------------- | -------------------------------------------------- |
| Contains Duplicate                             | **Hash Set**                  | "Have I seen this before?"                         |
| Valid Parentheses                              | **Stack**                     | Last opened must be first closed                   |
| Longest Substring Without Repeating Characters | **Sliding Window + Hash Set** | Grow/shrink a window while maintaining a condition |
| Search Insert Position                         | **Binary Search**             | Sorted array + find/search position                |
| Group Anagrams                                 | **Hash Map**                  | Group items by a computed key                      |

Here's how I want your brain to work

When you read a new problem, ask these questions in order:

1. Is the input sorted?

Examples:

Sorted array
Sorted intervals

➡️ Think Binary Search or Two Pointers

2. Am I looking for duplicates or counting?

Examples:

Most frequent
Contains duplicate
Count characters

➡️ Think Hash Set or Hash Map

3. Does the problem involve matching or nesting?

Examples:

Parentheses
Undo
Browser history

➡️ Think Stack

4. Am I looking for the longest/shortest contiguous subarray or substring?

Examples:

Longest substring
Smallest window
Maximum consecutive...

➡️ Think Sliding Window

5. Am I repeatedly merging or comparing two sorted sequences?

➡️ Think Two Pointers

6. Does each item belong to a group?

Examples:

Group anagrams
Employees by department
Students by grade

➡️ Think Hash Map

| Problem clue                | Pattern             |
| --------------------------- | ------------------- |
| Sorted array + search       | **Binary Search**   |
| Longest/Shortest contiguous | **Sliding Window**  |
| Matching brackets           | **Stack**           |
| Duplicate / Seen before     | **Hash Set**        |
| Frequency / Count / Group   | **Hash Map**        |
| Merge two sorted sequences  | **Two Pointers**    |
| Product except self         | **Prefix & Suffix** |
| Buy low, sell high          | **Running Minimum** |

| Clue                                | Pattern                 |
| ----------------------------------- | ----------------------- |
| Sorted + search                     | Binary Search           |
| Longest/Shortest window             | Sliding Window          |
| Duplicate / Seen                    | Hash Set                |
| Count / Frequency / Group           | Hash Map                |
| Matching brackets                   | Stack                   |
| Merge sorted arrays/lists           | Two Pointers            |
| Buy low, sell high                  | Running Minimum         |
| Product except self                 | Prefix/Suffix           |
| Connected cells / islands / graph   | **BFS / DFS**           |
| Minimum coins / ways / optimization | **Dynamic Programming** |

| Structure   | Store       | Check                    | Add                   |
| ----------- | ----------- | ------------------------ | --------------------- |
| `Set`       | Values only | `set.has(x)`             | `set.add(x)`          |
| `Map`       | Key → Value | `map.has(key)`           | `map.set(key, value)` |
| Object `{}` | Key → Value | `obj[key] !== undefined` | `obj[key] = value`    |
