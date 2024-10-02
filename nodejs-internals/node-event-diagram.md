graph TD
    A[Start] --> B[Execute top level code]
    B --> C[Schedule setTimeout]
    C --> D[Schedule setImmediate]
    D --> E[Initiate fs.readFile]
    E --> F[Log 'Hello from top level code']
    F --> G{Event Loop}
    G -->|Timer Phase| H[Execute setTimeout callback]
    H -->|Next Iteration| G
    G -->|Check Phase| I[Execute setImmediate callback]
    I -->|Next Iteration| G
    G -->|Poll Phase| J[Execute fs.readFile callback]
    J --> K[Schedule readFile setTimeout]
    K --> L[Schedule readFile setImmediate]
    L -->|Next Iteration| G
    G -->|Check Phase| M[Execute readFile setImmediate callback]
    M -->|Next Iteration| G
    G -->|Timer Phase| N[Execute readFile setTimeout callback]
    N -->|After 5 seconds| O[Execute last setTimeout callback]
    O --> P[End]