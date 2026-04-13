const questions = [
  // --- CHAPTER 1: INTRODUCTION (TF) ---
  { type: "tf", question: "A distributed system is one where processes and resources are sufficiently spread across multiple computers, whereas a decentralized system is one where they are necessarily spread.", answer: true, chapter: 1, chapterTitle: "Introduction" },
  { type: "tf", question: "The integrative view of distributed systems involves connecting existing networked computer systems into a larger system.", answer: true, chapter: 1, chapterTitle: "Introduction" },
  { type: "tf", question: "Distributed computing is a subset of cloud computing.", answer: false, chapter: 1, chapterTitle: "Introduction" },
  { type: "tf", question: "Middleware acts as a virtual OS layer that enables connected systems to communicate without OS-specific hassle.", answer: true, chapter: 1, chapterTitle: "Introduction" },
  { type: "tf", question: "Centralized solutions always have a single point of failure.", answer: false, chapter: 1, chapterTitle: "Introduction" },
  { type: "tf", question: "A single point of failure is often easier to manage and make robust than a distributed one.", answer: true, chapter: 1, chapterTitle: "Introduction" },
  { type: "tf", question: "Relocation transparency hides the fact that an object may be moved to another location while in use.", answer: true, chapter: 1, chapterTitle: "Introduction" },
  { type: "tf", question: "Reliability refers to the readiness of a system for usage.", answer: false, chapter: 1, chapterTitle: "Introduction" },
  { type: "tf", question: "Safety in a distributed system refers to a very low probability of catastrophes.", answer: true, chapter: 1, chapterTitle: "Introduction" },
  { type: "tf", question: "Fault prevention involves building a component to mask the occurrence of a fault.", answer: false, chapter: 1, chapterTitle: "Introduction" },
  
  // --- SCALABILITY (TF) ---
  { type: "tf", question: "Scalability applies only to the number of users or processes (size scalability).", answer: false, chapter: 1, chapterTitle: "Scalability" },
  { type: "tf", question: "Most modern systems easily achieve geographical and administrative scalability.", answer: false, chapter: 1, chapterTitle: "Scalability" },
  { type: "tf", question: "Synchronous client-server interactions (request-wait-reply) can cause major issues when moving from LAN to WAN.", answer: true, chapter: 1, chapterTitle: "Scalability" },
  { type: "tf", question: "WAN links are inherently unreliable compared to LAN links.", answer: true, chapter: 1, chapterTitle: "Scalability" },
  { type: "tf", question: "Asynchronous communication is a technique used to hide communication latencies.", answer: true, chapter: 1, chapterTitle: "Scalability" },
  { type: "tf", question: "Phone calls are an example of asynchronous communication.", answer: false, chapter: 1, chapterTitle: "Scalability" },
  { type: "tf", question: "E-mail is an example of asynchronous communication.", answer: true, chapter: 1, chapterTitle: "Scalability" },
  { type: "tf", question: "Partitioning data across multiple machines is a technique for scaling.", answer: true, chapter: 1, chapterTitle: "Scalability" },
  { type: "tf", question: "Global synchronization is required to keep all replicas consistent at all times.", answer: true, chapter: 1, chapterTitle: "Scalability" },
  { type: "tf", question: "Global synchronization scales very well for large-scale systems.", answer: false, chapter: 1, chapterTitle: "Scalability" },

  // --- CHAPTER 2: ARCHITECTURES (TF) ---
  { type: "tf", question: "A component is a modular unit with well-defined interfaces that is replaceable while a system is operating.", answer: true, chapter: 2, chapterTitle: "Architectures" },
  { type: "tf", question: "A connector mediates communication, coordination, or cooperation among components.", answer: true, chapter: 2, chapterTitle: "Architectures" },
  { type: "tf", question: "In a pure layered architecture, communication only flows from one layer to the layer directly below it.", answer: true, chapter: 2, chapterTitle: "Architectures" },
  { type: "tf", question: "A layered architecture with upcalls allows communication to move both up and down between layers.", answer: true, chapter: 2, chapterTitle: "Architectures" },
  { type: "tf", question: "In the traditional three-layered view, the processing layer contains the functions of an application without specific data.", answer: true, chapter: 2, chapterTitle: "Architectures" },
  { type: "tf", question: "Object-based style components are objects connected through procedure calls.", answer: true, chapter: 2, chapterTitle: "Architectures" },
  { type: "tf", question: "RESTful architectures view a system as a collection of resources individually managed by components.", answer: true, chapter: 2, chapterTitle: "Architectures" },
  { type: "tf", question: "In REST, a GET operation is used to modify a resource.", answer: false, chapter: 2, chapterTitle: "Architectures" },
  { type: "tf", question: "SOAP is currently more popular than REST because it uses XML.", answer: false, chapter: 2, chapterTitle: "Architectures" },
  { type: "tf", question: "JSON is typically faster than XML because it has less syntax.", answer: true, chapter: 2, chapterTitle: "Architectures" },

  // --- COORDINATION & P2P (TF) ---
  { type: "tf", question: "Temporal coupling means communicating processes must both be up and running.", answer: true, chapter: 2, chapterTitle: "P2P" },
  { type: "tf", question: "Event-based coordination is referentially coupled but temporally decoupled.", answer: false, chapter: 2, chapterTitle: "P2P" },
  { type: "tf", question: "Linda tuple space uses a shared data space where callers are blocked until a matching tuple is found.", answer: true, chapter: 2, chapterTitle: "P2P" },
  { type: "tf", question: "Content-based subscriptions in publish-subscribe systems have serious scalability issues compared to topic-based ones.", answer: true, chapter: 2, chapterTitle: "P2P" },
  { type: "tf", question: "In a middleware diagram, a broker is represented as a centralized node.", answer: true, chapter: 2, chapterTitle: "P2P" },
  { type: "tf", question: "Horizontal distribution involves splitting a client or server into logically equivalent parts operating on their own share of data.", answer: true, chapter: 2, chapterTitle: "P2P" },
  { type: "tf", question: "In Structured P2P, each data item is uniquely associated with a key, often via a hash function.", answer: true, chapter: 2, chapterTitle: "P2P" },
  { type: "tf", question: "The Chord algorithm provides binary-search-like lookup performance of O(log n).", answer: true, chapter: 2, chapterTitle: "P2P" },
  { type: "tf", question: "Flooding in unstructured P2P involves an issuing node passing a request to all its neighbors.", answer: true, chapter: 2, chapterTitle: "P2P" },
  { type: "tf", question: "Random walks in P2P find results faster than flooding but use more bandwidth.", answer: false, chapter: 2, chapterTitle: "P2P" },

  // --- CLOUD & EDGE (TF) ---
  { type: "tf", question: "Super-peer networks use index servers to improve search performance in unstructured P2P.", answer: true, chapter: 2, chapterTitle: "Cloud/Edge" },
  { type: "tf", question: "BitTorrent uses a tracker to keep account of active nodes that have chunks of a file.", answer: true, chapter: 2, chapterTitle: "Cloud/Edge" },
  { type: "tf", question: "Platform-as-a-Service (PaaS) includes storage, databases, and software frameworks like MS Azure.", answer: true, chapter: 2, chapterTitle: "Cloud/Edge" },
  { type: "tf", question: "In the cloud computing Infrastructure layer, customers normally see the hardware, routers, and cooling systems.", answer: false, chapter: 2, chapterTitle: "Cloud/Edge" },
  { type: "tf", question: "Edge computing places servers at the boundary between enterprise networks and the actual internet.", answer: true, chapter: 2, chapterTitle: "Cloud/Edge" },
  { type: "tf", question: "A common (though often false) argument for edge computing is that assets nearby are automatically better protected.", answer: true, chapter: 2, chapterTitle: "Cloud/Edge" },
  { type: "tf", question: "Edge orchestration involves deciding when and where to place a service for mobile applications.", answer: true, chapter: 2, chapterTitle: "Cloud/Edge" },
  { type: "tf", question: "Blockchains are unforgeable, append-only chains of blocks.", answer: true, chapter: 2, chapterTitle: "Cloud/Edge" },
  { type: "tf", question: "A permissioned blockchain distributed solution requires all participating nodes to jointly reach consensus.", answer: false, chapter: 2, chapterTitle: "Cloud/Edge" },
  { type: "tf", question: "In permissionless blockchains, participants collectively engage in a leader election.", answer: true, chapter: 2, chapterTitle: "Cloud/Edge" },

  // --- CHAPTER 3: PROCESSES (TF) ---
  { type: "tf", question: "A thread is a minimal software processor in whose context instructions can be executed.", answer: true, chapter: 3, chapterTitle: "Processes" },
  { type: "tf", question: "A process is a program that has been loaded into memory and is currently executing.", answer: true, chapter: 3, chapterTitle: "Processes" },
  { type: "tf", question: "Context switching between threads in the same process is generally more expensive than process switching.", answer: false, chapter: 3, chapterTitle: "Processes" },
  { type: "tf", question: "Threads share the same address space.", answer: true, chapter: 3, chapterTitle: "Processes" },
  { type: "tf", question: "Creation and destruction of threads is much cheaper than for processes.", answer: true, chapter: 3, chapterTitle: "Processes" },
  { type: "tf", question: "One reason to use threads is to exploit parallelism on multiprocessor systems.", answer: true, chapter: 3, chapterTitle: "Processes" },
  { type: "tf", question: "User-space thread implementations are extremely efficient because they don't involve the kernel.", answer: true, chapter: 3, chapterTitle: "Processes" },
  { type: "tf", question: "In kernel-level thread solutions, if one thread blocks, the entire process is blocked.", answer: false, chapter: 3, chapterTitle: "Processes" },
  { type: "tf", question: "A typical web browser primarily uses threads for logical organization rather than extreme parallelism.", answer: true, chapter: 3, chapterTitle: "Processes" },
  { type: "tf", question: "Native VMMs run an OS within a virtual machine.", answer: true, chapter: 3, chapterTitle: "Processes" },

  // --- VIRTUALIZATION & SERVERS (TF) ---
  { type: "tf", question: "Containers (like Docker) virtualize an entire application rather than the whole hardware.", answer: true, chapter: 3, chapterTitle: "Virtualization" },
  { type: "tf", question: "Infrastructure-as-a-Service (IaaS) rents out physical machines to customers for exclusive use.", answer: false, chapter: 3, chapterTitle: "Virtualization" },
  { type: "tf", question: "An iterative server handles one request completely before attending to the next.", answer: true, chapter: 3, chapterTitle: "Virtualization" },
  { type: "tf", question: "Concurrent servers are the norm in distributed systems.", answer: true, chapter: 3, chapterTitle: "Virtualization" },
  { type: "tf", question: "Stateless servers promise to invalidate a client's cache if data changes.", answer: false, chapter: 3, chapterTitle: "Virtualization" },
  { type: "tf", question: "Stateful servers allow for prefetching file blocks because they record that a file has been opened.", answer: true, chapter: 3, chapterTitle: "Virtualization" },
  { type: "tf", question: "TCP handoff is used in server clusters to prevent the first tier from becoming a communication bottleneck.", answer: true, chapter: 3, chapterTitle: "Virtualization" },
  { type: "tf", question: "Weak mobility involves moving the code segment, data segment, and the execution state.", answer: false, chapter: 3, chapterTitle: "Virtualization" },
  { type: "tf", question: "Strong mobility is easy to implement in heterogeneous systems with different CPUs.", answer: false, chapter: 3, chapterTitle: "Virtualization" },
  { type: "tf", question: "During a complete VM migration, a service may be unavailable for multiple seconds.", answer: true, chapter: 3, chapterTitle: "Virtualization" },

  // --- CHAPTER 4: COMMUNICATION (TF) ---
  { type: "tf", question: "The OSI model split the Application layer of TCP/IP into Application, Presentation, and Session layers.", answer: true, chapter: 4, chapterTitle: "Communication" },
  { type: "tf", question: "For many distributed systems, the lowest-level interface used is the network layer.", answer: true, chapter: 4, chapterTitle: "Communication" },
  { type: "tf", question: "TCP is a connection-oriented, reliable protocol.", answer: true, chapter: 4, chapterTitle: "Communication" },
  { type: "tf", question: "UDP is a reliable datagram communication protocol.", answer: false, chapter: 4, chapterTitle: "Communication" },
  { type: "tf", question: "Transient synchronous communication requires both client and server to be active at the same time.", answer: true, chapter: 4, chapterTitle: "Communication" },
  { type: "tf", question: "Message-oriented middleware aims at high-level persistent asynchronous communication.", answer: true, chapter: 4, chapterTitle: "Communication" },
  { type: "tf", question: "In RPC, parameters are transformed into machine-dependent representations to handle hardware differences.", answer: true, chapter: 4, chapterTitle: "Communication" },
  { type: "tf", question: "Asynchronous RPCs allow a client to continue without waiting for a server's answer.", answer: true, chapter: 4, chapterTitle: "Communication" },
  { type: "tf", question: "The socket operation 'Accept' blocks the caller until a connection request arrives.", answer: true, chapter: 4, chapterTitle: "Communication" },
  { type: "tf", question: "ZeroMQ (ZMQ) uses messages rather than byte-streams like traditional sockets.", answer: true, chapter: 4, chapterTitle: "Communication" },

  // --- CHAPTER 5: COORDINATION (TF) ---
  { type: "tf", question: "Universal Coordinated Time (UTC) is based on cesium atom transitions.", answer: true, chapter: 5, chapterTitle: "Coordination" },
  { type: "tf", question: "Internal synchronization aims to keep clocks accurate to a global time.", answer: false, chapter: 5, chapterTitle: "Coordination" },
  { type: "tf", question: "The Happened-before relationship focuses on the exact time events occur.", answer: false, chapter: 5, chapterTitle: "Coordination" },
  { type: "tf", question: "Lamport clocks guarantee that if C(a) < C(b), then 'a' causally preceded 'b'.", answer: false, chapter: 5, chapterTitle: "Coordination" },
  { type: "tf", question: "In Vector Clocks, each process maintains a local logical clock for every process in the system.", answer: true, chapter: 5, chapterTitle: "Coordination" },
  { type: "tf", question: "Token-based mutual exclusion requires permission from other processes to enter a critical region.", answer: false, chapter: 5, chapterTitle: "Coordination" },
  { type: "tf", question: "The Ricart & Agrawala algorithm is more fault-tolerant than a centralized coordinator.", answer: true, chapter: 5, chapterTitle: "Coordination" },
  { type: "tf", question: "Election by bullying identifying the process with the highest ID as the winner.", answer: true, chapter: 5, chapterTitle: "Coordination" },
  { type: "tf", question: "In Raft, if a follower doesn't receive a message from the leader for a while, it becomes a candidate.", answer: true, chapter: 5, chapterTitle: "Coordination" },
  { type: "tf", question: "Proof of Work is a computational puzzle that makes blockchain systems like Bitcoin legitimate.", answer: true, chapter: 5, chapterTitle: "Coordination" },

  // --- CHAPTER 6: NAMING (TF) ---
  { type: "tf", question: "An identifier can be reused for a different entity after the first one is gone.", answer: false, chapter: 6, chapterTitle: "Naming" },
  { type: "tf", question: "Broadcasting for address resolution (like ARP) cannot scale beyond LANs.", answer: true, chapter: 6, chapterTitle: "Naming" },
  { type: "tf", question: "Chord finger tables point to the first node succeeding 'p' by at least 2^(i-1).", answer: true, chapter: 6, chapterTitle: "Naming" },
  { type: "tf", question: "In HLS, the lookup operation starts at the root node and goes down.", answer: false, chapter: 6, chapterTitle: "Naming" },
  { type: "tf", question: "Mounting is used to merge different name spaces transparently.", answer: true, chapter: 6, chapterTitle: "Naming" },

  // --- CH 7-9: CONSISTENCY, FAULT, SECURITY (TF) ---
  { type: "tf", question: "Sequential consistency requires all processes to see the same order of operations.", answer: true, chapter: 7, chapterTitle: "Consistency Replication" },
  { type: "tf", question: "The CAP theorem states you can achieve Consistency, Availability, and Partition tolerance simultaneously.", answer: false, chapter: 7, chapterTitle: "Consistency Replication" },
  { type: "tf", question: "Two-Phase Commit (2PC) blocks if all participants are in the READY state and the coordinator fails.", answer: true, chapter: 8, chapterTitle: "Fault Tolerance" },
  { type: "tf", question: "Asymmetric encryption uses different keys for encryption and decryption.", answer: true, chapter: 9, chapterTitle: "Security" },
  { type: "tf", question: "Authorization is the process of verifying a claimed identity.", answer: false, chapter: 9, chapterTitle: "Security" },

  // --- MULTIPLE CHOICE SECTION (50 QUESTIONS) ---
  {
    type: "mcq", question: "Which definition best describes a distributed system according to the integrative view?",
    options: ["A system where resources are necessarily spread.", "Connecting existing networked computer systems into a larger system.", "Extending an existing system with additional computers.", "A cloud computing service with clearly defined links."],
    answer: 1, chapter: 1, chapterTitle: "Introduction"
  },
  {
    type: "mcq", question: "A decentralized system is characterized by processes and resources that are:",
    options: ["Sufficiently spread across multiple computers.", "Physically centralized but logically distributed.", "Necessarily spread across multiple computers.", "Only available through a single point of failure."],
    answer: 2, chapter: 1, chapterTitle: "Introduction"
  },
  {
    type: "mcq", question: "In the context of distribution transparency, 'Relocation Transparency' aims to:",
    options: ["Hide that an object may move to another location.", "Hide that an object may be moved while in use.", "Hide differences in data representation.", "Hide that an object is replicated across multiple nodes."],
    answer: 1, chapter: 1, chapterTitle: "Transparency"
  },
  {
    type: "mcq", question: "Which dependability requirement refers to the 'continuity of service delivery'?",
    options: ["Availability", "Reliability", "Maintainability", "Safety"],
    answer: 1, chapter: 1, chapterTitle: "Dependability"
  },
  {
    type: "mcq", question: "What does the 'MTBF' metric represent?",
    options: ["Mean Time To Failure", "Mean Time Between Failures (MTTF + MTTR)", "Maximum Time Before Fault", "Mean Time Before Full-recovery"],
    answer: 1, chapter: 1, chapterTitle: "Dependability"
  },
  {
    type: "mcq", question: "Hiring better programmers to stop bugs from occurring is an example of:",
    options: ["Fault tolerance", "Fault removal", "Fault prevention", "Fault forecasting"],
    answer: 2, chapter: 1, chapterTitle: "Dependability"
  },
  {
    type: "mcq", question: "In security, the 'CIA' triad stands for:",
    options: ["Coding, Integrity, Authorization", "Confidentiality, Integrity, Availability", "Control, Information, Authentication", "Confidentiality, Identity, Access"],
    answer: 1, chapter: 1, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "Which type of cryptosystem uses a public key (PK) and a private key (SK)?",
    options: ["Symmetric", "Hashing", "Asymmetric", "Digital Signature"],
    answer: 2, chapter: 1, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "Geographical Scalability in distributed systems is difficult because:",
    options: ["WAN links are inherently unreliable and have higher latency.", "Most systems assume asynchronous communication.", "Centralized solutions have infinite capacity.", "LAN links are too slow for multipoint communication."],
    answer: 0, chapter: 1, chapterTitle: "Scalability"
  },
  {
    type: "mcq", question: "Using e-mail is a classic example of which type of communication?",
    options: ["Synchronous", "Parallel", "Asynchronous", "Direct-coupled"],
    answer: 2, chapter: 1, chapterTitle: "Scalability"
  },
  {
    type: "mcq", question: "Which architectural style views a system as a collection of resources managed by components?",
    options: ["Layered", "Object-based", "RESTful", "Publish-subscribe"],
    answer: 2, chapter: 2, chapterTitle: "Architectures"
  },
  {
    type: "mcq", question: "In REST, which operation is used to modify a resource by transferring a new state?",
    options: ["POST", "GET", "DELETE", "PUT"],
    answer: 3, chapter: 2, chapterTitle: "Architectures"
  },
  {
    type: "mcq", question: "SOAP is generally slower than REST because:",
    options: ["It requires persistent connections.", "It uses XML, which involves more syntax/overhead.", "It only works with the network layer.", "It lacks a defined interface."],
    answer: 1, chapter: 2, chapterTitle: "Architectures"
  },
  {
    type: "mcq", question: "Temporal decoupling in coordination means:",
    options: ["Processes must both be up and running to communicate.", "Processes do not need to be active at the same time.", "Processes must know each other's explicit references.", "Communication happens in real-time only."],
    answer: 1, chapter: 2, chapterTitle: "Coordination"
  },
  {
    type: "mcq", question: "The 'Linda tuple space' uses which type of coordination?",
    options: ["Referentially coupled and Temporally coupled.", "Referentially decoupled and Temporally decoupled.", "Event-based and Temporally coupled.", "Direct and Mailbox-based."],
    answer: 1, chapter: 2, chapterTitle: "Coordination"
  },
  {
    type: "mcq", question: "In P2P, 'Horizontal Distribution' means:",
    options: ["Dividing applications into three logical layers.", "Splitting a client or server into equivalent parts.", "Using a centralized broker.", "Moving all computations to one powerful server."],
    answer: 1, chapter: 2, chapterTitle: "P2P"
  },
  {
    type: "mcq", question: "What is the expected lookup performance of the Chord algorithm?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
    answer: 2, chapter: 2, chapterTitle: "P2P"
  },
  {
    type: "mcq", question: "'Random Walks' in unstructured P2P are generally:",
    options: ["Faster than flooding but use more bandwidth.", "More communication efficient but take longer to find results.", "Dependent on a TTL of 1 hop only.", "Used only in structured hypercube layouts."],
    answer: 1, chapter: 2, chapterTitle: "P2P"
  },
  {
    type: "mcq", question: "In Cloud Computing, the 'Platform' layer (PaaS) typically provides:",
    options: ["Processors and cooling systems.", "Virtual Machines and storage.", "Software frameworks (Java/Python) and databases.", "Actual applications like Gmail."],
    answer: 2, chapter: 2, chapterTitle: "Cloud"
  },
  {
    type: "mcq", question: "A primary argument for Edge Computing (though often misconceived) is:",
    options: ["Assets nearby are automatically better protected.", "The cloud is always faster than local servers.", "It eliminates the need for any internet connection.", "It is easier to manage than centralized data centers."],
    answer: 0, chapter: 2, chapterTitle: "Edge"
  },
  {
    type: "mcq", question: "In a blockchain, a 'Permissioned' solution involves:",
    options: ["A single entity deciding on all block validation.", "All participating nodes reaching consensus jointly.", "A small, preselected group of processes acting as a trusted third party.", "Only the leader being allowed to see the chain."],
    answer: 2, chapter: 2, chapterTitle: "Blockchain"
  },
  {
    type: "mcq", question: "Which of the following is the best definition of a 'Process'?",
    options: ["A minimal software processor.", "A collection of registers used for a stack pointer.", "A program that has been loaded into memory and is executing.", "A logical unit of work that shares address space."],
    answer: 2, chapter: 3, chapterTitle: "Processes"
  },
  {
    type: "mcq", question: "Why is thread context switching cheaper than process switching?",
    options: ["Threads do not have registers.", "Threads share address space and don't require trapping to kernel.", "Processes don't use memory management units (MMU).", "The OS does not track threads."],
    answer: 1, chapter: 3, chapterTitle: "Processes"
  },
  {
    type: "mcq", question: "A 'User-space' thread implementation is efficient but risky because:",
    options: ["It requires a trap to the kernel for every instruction.", "If one thread blocks, the entire process is blocked.", "It cannot exploit parallelism on multicore processors.", "Threads cannot share memory."],
    answer: 1, chapter: 3, chapterTitle: "Processes"
  },
  {
    type: "mcq", question: "Which virtualization type involves running an OS within a virtual machine?",
    options: ["Process VMM", "Native VMM", "Hosted VMM", "Application Container"],
    answer: 1, chapter: 3, chapterTitle: "Virtualization"
  },
  {
    type: "mcq", question: "A 'Stateless Server' does NOT:",
    options: ["Handle requests from multiple clients.", "Record whether a file has been opened by a client.", "Use a specific port like 80.", "Function as a concurrent server."],
    answer: 1, chapter: 3, chapterTitle: "Servers"
  },
  {
    type: "mcq", question: "'TCP Handoff' is used in server clusters to:",
    options: ["Encrypt communication between tiers.", "Prevent the first tier from becoming a bottleneck.", "Ensure the database server handles the UI.", "Move code from the client to the server."],
    answer: 1, chapter: 3, chapterTitle: "Servers"
  },
  {
    type: "mcq", question: "'Strong Mobility' in code migration involves moving:",
    options: ["Only the code segment.", "The code and data segments, then rebooting.", "The component including its execution state (context).", "Only the data segment."],
    answer: 2, chapter: 3, chapterTitle: "Mobility"
  },
  {
    type: "mcq", question: "The OSI model adds which two layers to the TCP/IP suite?",
    options: ["Physical and Link", "Session and Presentation", "Middleware and Application", "Network and Transport"],
    answer: 1, chapter: 4, chapterTitle: "Communication"
  },
  {
    type: "mcq", question: "In the Berkeley socket interface, which operation blocks until a connection arrives?",
    options: ["Bind", "Listen", "Accept", "Connect"],
    answer: 2, chapter: 4, chapterTitle: "Communication"
  },
  {
    type: "mcq", question: "The 'Happened-before' relationship is primarily concerned with:",
    options: ["The exact time an event occurs.", "The relative order of events.", "The speed of message delivery.", "The physical location of the sender."],
    answer: 1, chapter: 5, chapterTitle: "Coordination"
  },
  {
    type: "mcq", question: "Lamport's logical clocks do NOT guarantee:",
    options: ["That if a -> b, then C(a) < C(b).", "That if C(a) < C(b), then a causally preceded b.", "Consistency with the happened-before relation.", "Incremental counter updates."],
    answer: 1, chapter: 5, chapterTitle: "Coordination"
  },
  {
    type: "mcq", question: "In the Ricart & Agrawala algorithm, a process 'wins' access if:",
    options: ["It has the highest Process ID.", "It has the lowest timestamp among those wanting access.", "The coordinator grants it a token.", "It is the only node currently up."],
    answer: 1, chapter: 5, chapterTitle: "Coordination"
  },
  {
    type: "mcq", question: "Election by Bullying results in the coordinator being the process with:",
    options: ["The longest uptime.", "The most resources.", "The highest unique identifier (ID).", "The fastest response time."],
    answer: 2, chapter: 5, chapterTitle: "Coordination"
  },
  {
    type: "mcq", question: "In Raft, a server volunteers to be leader by entering which state?",
    options: ["Follower", "Candidate", "Coordinator", "Validator"],
    answer: 1, chapter: 5, chapterTitle: "Coordination"
  },
  {
    type: "mcq", question: "A 'Pure Name' is used in naming systems primarily for:",
    options: ["Locating an entity on a WAN.", "Comparison only (it has no internal meaning).", "Identifying the access point port.", "Determining the host's IP address."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "Iterative name resolution involves:",
    options: ["The name server calling another recursively.", "The client contacting each name server in path.", "The root server resolving entire path in one step.", "Caching intermediate results at the client only."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "The CAP theorem states that a networked system can only provide two of these three:",
    options: ["Consistency, Availability, Partition tolerance.", "Confidentiality, Integrity, Authentication.", "Caching, Archiving, Partitioning.", "Communication, Architecture, Processes."],
    answer: 0, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "In a Two-Phase Commit (2PC), if a participant sends 'VOTE-ABORT':",
    options: ["The coordinator waits for the remaining votes.", "The coordinator immediately sends GLOBAL-ABORT.", "The participant waits for a GLOBAL-COMMIT.", "Only that participant's transaction is rolled back."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "'Backward Error Recovery' involves:",
    options: ["Finding a new state to continue operation.", "Bringing the system back into a previous error-free state.", "Preventing sloppy programmers from working.", "Ignoring the error and moving to the next request."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "The principle of 'Least Privilege' dictates that a process should:",
    options: ["Have no administrative access.", "Operate with the fewest possible privileges needed.", "Always use 'admin, admin' credentials.", "Be open for review by any user."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "'Authentication' is the process of:",
    options: ["Checking if an entity has proper access rights.", "Verifying a claimed identity.", "Encrypting data so attackers cannot understand.", "Tracing access to resources via logs."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "A 'Hard Link' in a naming graph is:",
    options: ["A node containing the name of another node.", "A path name resolved by following a specific path.", "A link that requires a secure channel.", "A link to a foreign name space."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "'Sequential Consistency' requires that:",
    options: ["Processes see writes in order physically sent.", "Potentially causally related writes seen in same order.", "All processes see the same sequential order of operations.", "Replicas are only consistent after a set time limit."],
    answer: 2, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "Which client-centric consistency model ensures you see your own updates?",
    options: ["Monotonic Reads", "Monotonic Writes", "Read Your Writes", "Writes Follow Reads"],
    answer: 2, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "A 'K-fault tolerant group' can mask k failures. For arbitrary (malicious) failures, it needs:",
    options: ["k + 1 members", "2k members", "2k + 1 members", "3k + 1 members"],
    answer: 3, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "'Coordinated Checkpointing' requires that:",
    options: ["Each process takes a checkpoint independently.", "All processes take a checkpoint after coordinated action.", "Checkpoints only taken when failure detected.", "Only the coordinator saves state."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "In an 'Eclipse Attack' on a gossip-based service, the attacker:",
    options: ["Crashes the entire network.", "Modifies the data in a blockchain.", "Isolates a node by returning links only to colluders.", "Guesses the private key of the admin."],
    answer: 2, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "Which firewall type inspects the content of messages (like spam filters)?",
    options: ["Packet-filtering gateway", "Application-level gateway", "Circuit-level gateway", "Stateless router"],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "'Horizontal Distribution' is often seen in:",
    options: ["Web server clusters splitting the dataset.", "Mainframe configurations.", "Traditional three-layered database views.", "Single-threaded processes."],
    answer: 0, chapter: 2, chapterTitle: "Architectures"
  },
  // --- PART 2: NEW 100 MCQ (CHAPTERS 1-9) ---
  {
    type: "mcq", question: "At what point does a decentralized system generally become a distributed one?",
    options: ["When it reaches 100 nodes.", "When at least k > 0 links are added between nodes.", "When moved to a private cloud.", "When it uses a logically centralized root."],
    answer: 1, chapter: 1, chapterTitle: "Introduction"
  },
  {
    type: "mcq", question: "The 'integrative view' of distributed systems is defined as:",
    options: ["Extending an existing system with more computers.", "Connecting existing networked systems into a larger system.", "Merging three logical layers into one server.", "Implementing transparency via hardware only."],
    answer: 1, chapter: 1, chapterTitle: "Introduction"
  },
  {
    type: "mcq", question: "The 'expansive view' of distributed systems involves:",
    options: ["Extending an existing networked system with more computers.", "Reducing a system to a single point of failure.", "Hiding differences in data representation.", "Using a hosted VMM for all operations."],
    answer: 0, chapter: 1, chapterTitle: "Introduction"
  },
  {
    type: "mcq", question: "Why is the DNS root a common misconception regarding centralization?",
    options: ["It is physically centralized in one building.", "It is logically centralized but physically (massively) distributed.", "It is logically distributed but physically centralized.", "It has a single point of failure that cannot be managed."],
    answer: 1, chapter: 1, chapterTitle: "Scalability"
  },
  {
    type: "mcq", question: "Why might a 'single point of failure' sometimes be preferred by system admins?",
    options: ["It is physically impossible to crash.", "It is often easier to manage and make robust.", "It automatically provides relocation transparency.", "It inherently scales geographically."],
    answer: 1, chapter: 1, chapterTitle: "Introduction"
  },
  {
    type: "mcq", question: "Which transparency hides the fact that an object may be moved to another location while in use?",
    options: ["Access transparency", "Location transparency", "Relocation transparency", "Replication transparency"],
    answer: 2, chapter: 1, chapterTitle: "Transparency"
  },
  {
    type: "mcq", question: "'Maintainability' in a dependable system refers to:",
    options: ["The readiness for usage.", "The continuity of service delivery.", "How easily a failed system can be repaired.", "The very low probability of catastrophes."],
    answer: 2, chapter: 1, chapterTitle: "Dependability"
  },
  {
    type: "mcq", question: "If a component is not living up to its specifications (e.g., a crash), this is a(n):",
    options: ["Error", "Fault", "Failure", "Omission"],
    answer: 2, chapter: 1, chapterTitle: "Dependability"
  },
  {
    type: "mcq", question: "The cause of an error (e.g., a sloppy programmer) is called a:",
    options: ["Failure", "Fault", "Collision", "Migration"],
    answer: 1, chapter: 1, chapterTitle: "Dependability"
  },
  {
    type: "mcq", question: "A 'Fault Prevention' technique mentioned in the notes is:",
    options: ["Building with two independent programmers.", "Hiring the best programmers to stop bugs.", "Using coordinated checkpointing.", "Implementing signature-based IDS."],
    answer: 1, chapter: 1, chapterTitle: "Dependability"
  },
  {
    type: "mcq", question: "Which dependability requirement is defined as 'readiness for usage'?",
    options: ["Reliability", "Safety", "Availability", "Integrity"],
    answer: 2, chapter: 1, chapterTitle: "Dependability"
  },
  {
    type: "mcq", question: "In asymmetric encryption, if Alice encrypts a message for Bob, she uses:",
    options: ["Her own private key.", "Bob's public key.", "A shared secret key.", "Bob's private key."],
    answer: 1, chapter: 1, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "Which scaling technique hides latencies by not waiting for a response?",
    options: ["Synchronous communication", "Asynchronous communication", "Global synchronization", "Parallel computing"],
    answer: 1, chapter: 1, chapterTitle: "Scalability"
  },
  {
    type: "mcq", question: "Why did 'Distributed Shared Memory' systems eventually fail?",
    options: ["Too difficult to program.", "Performance could not compete with multiprocessors.", "Too many hardware interrupts.", "Lacked replication transparency."],
    answer: 1, chapter: 1, chapterTitle: "History"
  },
  {
    type: "mcq", question: "A group of high-end homogeneous systems connected via LAN is called:",
    options: ["Grid computing", "Edge computing", "Cluster computing", "Ubiquitous computing"],
    answer: 2, chapter: 1, chapterTitle: "Introduction"
  },
  {
    type: "mcq", question: "In a 'pure layered' architecture, communication flows:",
    options: ["Up and down between all layers.", "Only from one layer to the layer directly below.", "Only between application and database.", "Through a centralized broker."],
    answer: 1, chapter: 2, chapterTitle: "Architectures"
  },
  {
    type: "mcq", question: "A 'layered architecture with upcalls' allows:",
    options: ["Layers to be skipped.", "Communication to move both up and down.", "Only processing to talk to data.", "Objects to be placed via RPC."],
    answer: 1, chapter: 2, chapterTitle: "Architectures"
  },
  {
    type: "mcq", question: "In the three-layered view, the 'Processing Layer' contains:",
    options: ["Interfacing units.", "Functions of an application without specific data.", "Raw data manipulated by client.", "Hardware and cooling."],
    answer: 1, chapter: 2, chapterTitle: "Architectures"
  },
  {
    type: "mcq", question: "Which style uses encapsulation without revealing internal implementation?",
    options: ["Layered", "RESTful", "Object-based", "Publish-subscribe"],
    answer: 2, chapter: 2, chapterTitle: "Architectures"
  },
  {
    type: "mcq", question: "In RESTful architectures, all messages must be:",
    options: ["Encrypted with RSA.", "Fully self-described.", "Wrapped in XML.", "Limited to 1024 bytes."],
    answer: 1, chapter: 2, chapterTitle: "Architectures"
  },
  {
    type: "mcq", question: "In Amazon S3, 'Buckets' are equivalent to:",
    options: ["Objects", "Directories", "Files", "Keys"],
    answer: 1, chapter: 2, chapterTitle: "Architectures"
  },
  {
    type: "mcq", question: "A major reason REST replaced SOAP in many organizations is:",
    options: ["SOAP lacks transport protocols.", "SOAP is slow due to XML syntax overhead.", "REST allows upcalls.", "SOAP requires referential decoupling."],
    answer: 1, chapter: 2, chapterTitle: "Architectures"
  },
  {
    type: "mcq", question: "According to notes, which is faster: XML or JSON?",
    options: ["XML, more well-defined.", "JSON, less syntax.", "Same speed.", "XML, works with any protocol."],
    answer: 1, chapter: 2, chapterTitle: "Architectures"
  },
  {
    type: "mcq", question: "'Referentially coupled' coordination means:",
    options: ["Processes must be active together.", "Communication uses explicit referencing.", "Communication via shared data space.", "Communication is always asynchronous."],
    answer: 1, chapter: 2, chapterTitle: "Coordination"
  },
  {
    type: "mcq", question: "The Linda tuple space models a space as a:",
    options: ["Binary tree", "Multiset", "Linked list", "Ring"],
    answer: 1, chapter: 2, chapterTitle: "Coordination"
  },
  {
    type: "mcq", question: "Which subscription type has scalability issues due to computation?",
    options: ["Topic-based", "Attribute-based", "Content-based", "Direct-based"],
    answer: 2, chapter: 2, chapterTitle: "Coordination"
  },
  {
    type: "mcq", question: "In middleware diagrams, a 'Broker' is characterized as:",
    options: ["Interconnected nodes.", "A centralized node.", "A skippable layer.", "A client stub."],
    answer: 1, chapter: 2, chapterTitle: "Architectures"
  },
  {
    type: "mcq", question: "Architecture where UI, Application, and DB are on separate machines:",
    options: ["Single-tiered", "Two-tiered", "Three-tiered", "Peer-to-peer"],
    answer: 2, chapter: 2, chapterTitle: "Architectures"
  },
  {
    type: "mcq", question: "Vertical distribution involves:",
    options: ["Splitting a server into equivalent parts.", "Running different layers on different servers.", "Using a semantic-free index.", "Migrating state to a client."],
    answer: 1, chapter: 2, chapterTitle: "Architectures"
  },
  {
    type: "mcq", question: "In Structured P2P like Chord, nodes are organized in a:",
    options: ["Mesh", "Ring", "Hypercube", "Tree"],
    answer: 1, chapter: 2, chapterTitle: "P2P"
  },
  {
    type: "mcq", question: "In unstructured P2P searching, 'Flooding' involves:",
    options: ["Random neighbor request.", "Passing request to all neighbors recursively.", "Contacting index server.", "DHT successor lookup."],
    answer: 1, chapter: 2, chapterTitle: "P2P"
  },
  {
    type: "mcq", question: "A 'Super-peer' network breaks symmetry to:",
    options: ["Increase leeches.", "Improve performance via index servers.", "Remove tracker.", "Equalize node capacity."],
    answer: 1, chapter: 2, chapterTitle: "P2P"
  },
  {
    type: "mcq", question: "In BitTorrent, the 'Tracker' is:",
    options: ["Downloading node.", "Server keeping account of active nodes with chunks.", "Seeder node.", "Global directory for .torrent files."],
    answer: 1, chapter: 2, chapterTitle: "P2P"
  },
  {
    type: "mcq", question: "Which cloud layer provides virtualization and virtual servers?",
    options: ["Hardware", "Infrastructure (IaaS)", "Platform (PaaS)", "Application (SaaS)"],
    answer: 1, chapter: 2, chapterTitle: "Cloud"
  },
  {
    type: "mcq", question: "'Edge computing' places servers at:",
    options: ["Massive datacenter center.", "Enterprise network / internet boundary.", "User mobile device.", "Virtual machine monitor."],
    answer: 1, chapter: 2, chapterTitle: "Edge"
  },
  {
    type: "mcq", question: "A 'Thread' is best defined as:",
    options: ["Program loaded into memory.", "Minimal software processor with execution context.", "Physical CPU collection.", "Unit that doesn't share address space."],
    answer: 1, chapter: 3, chapterTitle: "Processes"
  },
  {
    type: "mcq", question: "The 'Processor Context' consists of values stored in:",
    options: ["Main memory.", "Registers (SP, PC, etc.).", "MMU.", "Local disk."],
    answer: 1, chapter: 3, chapterTitle: "Processes"
  },
  {
    type: "mcq", question: "The 'Process Context' must include at least:",
    options: ["Thread local storage.", "MMU register values.", "Server IP.", "VMM version."],
    answer: 1, chapter: 3, chapterTitle: "Processes"
  },
  {
    type: "mcq", question: "Why is it cheaper to manage threads than processes?",
    options: ["No execution state.", "Threads share address space.", "No CPU registers.", "User-space implementation."],
    answer: 1, chapter: 3, chapterTitle: "Processes"
  },
  {
    type: "mcq", question: "User-space thread solutions are efficient because:",
    options: ["Independent blocking.", "Handled in process without kernel trapping.", "Hardware protection.", "System call for switch."],
    answer: 1, chapter: 3, chapterTitle: "Processes"
  },
  {
    type: "mcq", question: "In a 'Kernel-level' thread solution, if one thread blocks:",
    options: ["Entire process blocks.", "Kernel can schedule another thread in same process.", "CPU halts.", "Context is lost."],
    answer: 1, chapter: 3, chapterTitle: "Processes"
  },
  {
    type: "mcq", question: "Threads in a typical Web Browser are primarily used for:",
    options: ["Parallel computing.", "Logically organizing browser parts.", "TLP value 100.", "Reducing network layer."],
    answer: 1, chapter: 3, chapterTitle: "Processes"
  },
  {
    type: "mcq", question: "In the 'Dispatcher/Worker' model:",
    options: ["Workers are iterative.", "Dispatcher passes requests to worker threads.", "Dispatcher is finite-state.", "Workers are non-blocking."],
    answer: 1, chapter: 3, chapterTitle: "Processes"
  },
  {
    type: "mcq", question: "Virtualization model with interpreter atop OS (Java/.NET):",
    options: ["Native VMM", "Hosted VMM", "Process VMM", "Application Container"],
    answer: 2, chapter: 3, chapterTitle: "Virtualization"
  },
  {
    type: "mcq", question: "'Containers' (Docker) are unique because they:",
    options: ["Virtualize entire OS.", "Virtualize app/dependencies, sharing host OS.", "Require strong mobility.", "Homogeneous clusters only."],
    answer: 1, chapter: 3, chapterTitle: "Virtualization"
  },
  {
    type: "mcq", question: "PlanetLab environment for a distributed app:",
    options: ["Slice", "Vserver", "Hub", "Proxy"],
    answer: 1, chapter: 3, chapterTitle: "Processes"
  },
  {
    type: "mcq", question: "Concurrent servers are the norm because they handle:",
    options: ["One request at a time.", "Multiple requests despite blocking I/O.", "Requests without ports.", "Stateless only."],
    answer: 1, chapter: 3, chapterTitle: "Servers"
  },
  {
    type: "mcq", question: "Which standard port is used for Telnet?",
    options: ["21", "23", "25", "80"],
    answer: 1, chapter: 3, chapterTitle: "Servers"
  },
  {
    type: "mcq", question: "'Out-of-band' communication is used to:",
    options: ["Send to DB.", "Interrupt server (urgent data).", "Encrypt message.", "Iterative resolution."],
    answer: 1, chapter: 3, chapterTitle: "Communication"
  },
  {
    type: "mcq", question: "A 'Stateless Server' will NOT:",
    options: ["Handle HTTP.", "Record whether client opened a file.", "Use dispatcher.", "Lose performance."],
    answer: 1, chapter: 3, chapterTitle: "Servers"
  },
  {
    type: "mcq", question: "'Stateful Servers' are advantageous for:",
    options: ["Reducing state inconsistency.", "Prefetching file blocks.", "Client/Server independence.", "Minimizing RAM."],
    answer: 1, chapter: 3, chapterTitle: "Servers"
  },
  {
    type: "mcq", question: "In a cluster, 'TCP Handoff' makes response look like it's from:",
    options: ["Actual server.", "Switch (First tier).", "Client.", "Database."],
    answer: 1, chapter: 3, chapterTitle: "Servers"
  },
  {
    type: "mcq", question: "Code migration for 'Load Distribution' aims to:",
    options: ["Move data to code.", "Ensure servers are sufficiently loaded.", "Fail-safe defaults.", "Asymmetric encryption."],
    answer: 1, chapter: 3, chapterTitle: "Mobility"
  },
  {
    type: "mcq", question: "'Weak Mobility' implies moving only:",
    options: ["Execution state.", "Code and data segments (then reboot).", "Registers and stack.", "Entire VM."],
    answer: 1, chapter: 3, chapterTitle: "Mobility"
  },
  {
    type: "mcq", question: "Code migration in heterogeneous systems usually requires:",
    options: ["Strong mobility.", "Abstract machines (interpreted/VMM).", "Iterative servers.", "UDP."],
    answer: 1, chapter: 3, chapterTitle: "Mobility"
  },
  {
    type: "mcq", question: "In TCP/IP, the 'Link' layer deals with:",
    options: ["IP packets.", "MAC addresses and frames.", "Reliable streams.", "Marshalling."],
    answer: 1, chapter: 4, chapterTitle: "Communication"
  },
  {
    type: "mcq", question: "OSI adds 'Session' and 'Presentation' between:",
    options: ["Physical and Link.", "Application and Transport.", "Network and Transport.", "Middleware and App."],
    answer: 1, chapter: 4, chapterTitle: "Communication"
  },
  {
    type: "mcq", question: "Lowest-level interface used by many distributed systems:",
    options: ["Physical layer.", "Network layer.", "Session layer.", "Middleware layer."],
    answer: 1, chapter: 4, chapterTitle: "Communication"
  },
  {
    type: "mcq", question: "'Persistent Communication' means a message is:",
    options: ["Discarded if receiver down.", "Stored at communication server until delivered.", "TCP only.", "Public key encrypted."],
    answer: 1, chapter: 4, chapterTitle: "Communication"
  },
  {
    type: "mcq", question: "Message-Oriented Middleware (MOM) aims at:",
    options: ["Transient sync.", "High-level persistent asynchronous comms.", "Hiding stubs.", "Physical clocks."],
    answer: 1, chapter: 4, chapterTitle: "Communication"
  },
  {
    type: "mcq", question: "In RPC, which component builds message and calls local OS?",
    options: ["Server.", "Client stub.", "Dispatcher.", "Resolver."],
    answer: 1, chapter: 4, chapterTitle: "Communication"
  },
  {
    type: "mcq", question: "'Marshalling' parameters involves:",
    options: ["Encoding into byte sequence.", "Local procedure call.", "Encrypted hash.", "Vserver slice."],
    answer: 0, chapter: 4, chapterTitle: "Communication"
  },
  {
    type: "mcq", question: "'Asynchronous RPCs' are designed to:",
    options: ["Use UDP.", "Let client continue without server answer.", "Force client block.", "Encrypt parameters."],
    answer: 1, chapter: 4, chapterTitle: "Communication"
  },
  {
    type: "mcq", question: "The socket operation 'Listen' tells the OS:",
    options: ["Connect to server.", "Max number of pending requests.", "Send 1024 bytes.", "Attach local address."],
    answer: 1, chapter: 4, chapterTitle: "Communication"
  },
  {
    type: "mcq", question: "ZeroMQ (ZMQ) differs by using:",
    options: ["Byte-streams.", "Messages.", "Pure names.", "Physical addresses."],
    answer: 1, chapter: 4, chapterTitle: "Communication"
  },
  {
    type: "mcq", question: "In persistent MQ, the 'GET' operation:",
    options: ["Checks queue, non-blocking.", "Blocks until queue non-empty, removes message.", "Installs handler.", "Appends to queue."],
    answer: 1, chapter: 4, chapterTitle: "Communication"
  },
  {
    type: "mcq", question: "A 'Message Broker' handles:",
    options: ["Application heterogeneity (formats).", "Clock sync.", "Bullying election.", "Sequential consistency."],
    answer: 0, chapter: 4, chapterTitle: "Communication"
  },
  {
    type: "mcq", question: "'Rumor spreading' epidemic protocol replica:",
    options: ["Exchanges state to become identical.", "Tells several replicas about update.", "Floods recursively.", "Lease-based poll."],
    answer: 1, chapter: 4, chapterTitle: "Communication"
  },
  {
    type: "mcq", question: "Application-level multicast overlay organized as:",
    options: ["Ring", "Tree", "Hypercube", "Star"],
    answer: 1, chapter: 4, chapterTitle: "Communication"
  },
  {
    type: "mcq", question: "'Link Stress' measures:",
    options: ["Node count.", "Frequency of message crossing same physical link.", "ISP bandwidth.", "Backbone latency."],
    answer: 1, chapter: 4, chapterTitle: "Communication"
  },
  {
    type: "mcq", question: "Universal Coordinated Time (UTC) based on:",
    options: ["Earth rotation.", "Cesium 133 atom transitions.", "Laptop average.", "DNS root."],
    answer: 1, chapter: 5, chapterTitle: "Coordination"
  },
  {
    type: "mcq", question: "'Internal synchronization' keeps clocks:",
    options: ["Accurate to UTC.", "Precise relative to each other.", "Zero drift.", "Logically ordered."],
    answer: 1, chapter: 5, chapterTitle: "Coordination"
  },
  {
    type: "mcq", question: "The Happened-before relation (a -> b) is true if:",
    options: ["Same UTC time.", "a is sending, b is receiving.", "Crash and recovery.", "a ID > b ID."],
    answer: 1, chapter: 5, chapterTitle: "Coordination"
  },
  {
    type: "mcq", question: "Lamport logical clock rule on receipt of message ts(m):",
    options: ["Set to ts(m) - 1.", "Set to max(local, ts(m)) + 1.", "Reset to 0.", "Use hardware clock."],
    answer: 1, chapter: 5, chapterTitle: "Coordination"
  },
  {
    type: "mcq", question: "Vector Clocks superior to Lamport because they:",
    options: ["Sync with UTC.", "Capture potential causality.", "Scale to billions.", "Work without network."],
    answer: 1, chapter: 5, chapterTitle: "Coordination"
  },
  {
    type: "mcq", question: "In Ricart & Agrawala, a process replies to request only if:",
    options: ["No interest in resource.", "Highest ID.", "Holds token.", "Higher timestamp."],
    answer: 0, chapter: 5, chapterTitle: "Coordination"
  },
  {
    type: "mcq", question: "Token Ring mutual exclusion avoids:",
    options: ["Crashes.", "Starvation.", "Network latency.", "Multi-threading."],
    answer: 1, chapter: 5, chapterTitle: "Coordination"
  },
  {
    type: "mcq", question: "ZooKeeper locking involves clients creating a:",
    options: ["Token.", "Node in tree-based namespace.", "Vector clock.", "RPC stub."],
    answer: 1, chapter: 5, chapterTitle: "Coordination"
  },
  {
    type: "mcq", question: "'Election by Bullying' identifies process with:",
    options: ["Lowest ID.", "Highest unique ID.", "Longest uptime.", "Most RAM."],
    answer: 1, chapter: 5, chapterTitle: "Coordination"
  },
  {
    type: "mcq", question: "In Ring Election, initiator sends list of:",
    options: ["Dead processes.", "Living processes found in ring circulation.", "Token owners.", "RPC stubs."],
    answer: 1, chapter: 5, chapterTitle: "Coordination"
  },
  {
    type: "mcq", question: "Raft leader selected during a:",
    options: ["Slice.", "Term.", "Finger update.", "2PC."],
    answer: 1, chapter: 5, chapterTitle: "Coordination"
  },
  {
    type: "mcq", question: "Proof of Work puzzle involves finding hash with:",
    options: ["Specific length.", "K leading zeros.", "Sender private key.", "UTC timestamp."],
    answer: 1, chapter: 5, chapterTitle: "Blockchain"
  },
  {
    type: "mcq", question: "Proof of Stake leader probability increases by:",
    options: ["Compute power.", "Secure tokens owned.", "Process ID.", "Edge proximity."],
    answer: 1, chapter: 5, chapterTitle: "Blockchain"
  },
  {
    type: "mcq", question: "'Peer Sampling' gossip is statistically like:",
    options: ["Flooding.", "Uniform random selection from network.", "Linearizability.", "Iterative resolution."],
    answer: 1, chapter: 5, chapterTitle: "Coordination"
  },
  {
    type: "mcq", question: "Eclipse Attack (Hub Attack) nodes return:",
    options: ["GLOBAL-ABORT.", "Links only to each other (isolate node).", "Incorrect UTC.", "O(n) tables."],
    answer: 1, chapter: 5, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "A 'Pure Name' is used for:",
    options: ["Locating entity.", "Comparison only (no meaning).", "Identifying Vserver.", "Metadata."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "An 'Identifier' must never be:",
    options: ["Random.", "Reused for different entity.", "Location-independent.", "Content-based."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "ARP finds MAC address via:",
    options: ["Forwarding pointers.", "Broadcasting.", "Home-based.", "Finger tables."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "A 'Soft Link' node contains:",
    options: ["Object data.", "Name of another node.", "Vector clock.", "2PC log."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "'Iterative Name Resolution' performed by:",
    options: ["Recursive server call.", "Client resolver contacting each server.", "Root resolving entire name.", "Peer sampling."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "Sequential consistency requires operations in:",
    options: ["Physical sent order.", "Same sequential order.", "UTC order.", "Non-blocking manner."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "Successive read returns same or more recent value:",
    options: ["Monotonic Writes", "Monotonic Reads", "Read Your Writes", "Writes Follow Reads"],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "'Leases' allow dynamic switching between:",
    options: ["TCP/UDP.", "Push/Pull updates.", "Encryption types.", "Thread types."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "CAP Theorem states you cannot have simultaneously:",
    options: ["Consistency, Availability, Partition Tolerance.", "Confidentiality, Integrity, Availability.", "Caching, Archiving, Partitioning.", "Computing, Architecture, Processes."],
    answer: 0, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "'Heartbeat' is used for:",
    options: ["Mutual exclusion.", "Failure detection.", "Election by stake.", "Nonce encryption."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "'At-least-once' RPC semantics used when operations are:",
    options: ["Non-blocking.", "Idempotent.", "Stateful.", "Asynchronous."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "In 2PC, if READY participants fail coordinator:",
    options: ["Completes.", "Blocks.", "Abort all.", "Bully leader."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "Backward Error Recovery previous state via:",
    options: ["Programmers.", "Checkpoints.", "Signatures.", "Pointers."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "Principle of 'Least Privilege':",
    options: ["Admin access.", "Fewest possible privileges needed.", "Obscurity.", "admin, admin."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "OAuth mechanism used for:",
    options: ["Encryption.", "Delegation of access rights.", "Clock sync.", "Consensus."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  // --- PART 3: CHAPTERS 6-9 (NAMING, CONSISTENCY, FAULT TOLERANCE, SECURITY) ---
  {
    type: "mcq", question: "In distributed naming, what is the primary difference between a name and an address?",
    options: ["A name is for humans; an address is for machines.", "A name identifies an entity; an address identifies an access point.", "Names are numeric; addresses are strings.", "There is no fundamental difference."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "A 'location-independent' name is defined as one that:",
    options: ["Changes every time the entity moves.", "Is independent of the addresses of the entity's access points.", "Is used only within LANs.", "Requires a centralized server to resolve."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "Which of the following is NOT a property of an 'Identifier'?",
    options: ["It refers to at most one entity.", "Each entity is referred to by at most one identifier.", "It may be reused for a different entity after the first is gone.", "It always refers to the same entity."],
    answer: 2, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "Why does 'Broadcasting' for address resolution (like ARP) fail to scale beyond LANs?",
    options: ["It requires too much storage.", "It requires all processes to listen to incoming requests.", "It uses slow asymmetric encryption.", "MAC addresses are not recognized on the WAN."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "When using 'Forwarding Pointers,' what happens when an entity moves?",
    options: ["It broadcasts its new address.", "It leaves behind a pointer to its next location.", "It notifies the root DNS server.", "All previous pointers are deleted."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "A major scalability problem with long chains of forwarding pointers is:",
    options: ["They are not fault-tolerant.", "They require pure names only.", "They prevent iterative resolution.", "They only work with IPv6."],
    answer: 0, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "In a 'Home-based approach,' the client contacts the entity's _______ first.",
    options: ["Most local replica.", "Current foreign address.", "Registered home address.", "Nearest super-peer."],
    answer: 2, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "What is a 'Nonsolution' for looking up keys in a massive Chord ring?",
    options: ["Using finger tables.", "Letting each node track only its neighbor for linear search.", "Hashing entities to m-bit keys.", "Proximity neighbor selection."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "In a Chord finger table, the i-th entry FTp[i] points to:",
    options: ["The node exactly 2^i steps away.", "The first node succeeding p by at least 2^(i-1).", "The node responsible for the root.", "The predecessor of node p."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "'Proximity Routing' in naming systems aims to:",
    options: ["Reduce identifier space size.", "Maintain multiple successors and forward to the closest.", "Ensure all nodes are in a ring.", "Encrypt all lookup requests."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "In Hierarchical Location Services (HLS), a lookup always starts at:",
    options: ["The root node.", "A local leaf node.", "The home address.", "A random node."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "The HLS lookup operation stops moving 'up' the tree when:",
    options: ["It reaches the leaf node.", "A node is found that knows about the entity.", "Latency exceeds 500ms.", "It reaches a seeder node."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "A 'Closure Mechanism' is defined as:",
    options: ["Deleting a name space.", "The mechanism to select the context to start resolution.", "A security feature blocking access.", "The method to sign a DNS zone."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "Which link type allows a node to actually contain the name of another node?",
    options: ["Hard link.", "Soft link.", "Proximity link.", "Recursive link."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "In the context of 'Mounting,' the 'Mount Point' is located in:",
    options: ["The foreign name space.", "The current name space.", "The root directory only.", "The client's local cache."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "The 'Global level' of a name-space implementation typically consists of:",
    options: ["Low-level directory nodes.", "High-level directory nodes managed jointly by administrations.", "Mobile entities.", "Local file servers."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "Which layer of a name space has the highest number of nodes and immediate responsiveness?",
    options: ["Global layer.", "Administrational layer.", "Managerial layer.", "Recursive layer."],
    answer: 2, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "In 'Iterative Name Resolution,' who is responsible for contacting the next name server?",
    options: ["The current name server.", "The client's name resolver.", "The root server.", "The seeder."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "Recursive Name Resolution is often preferred for clients because:",
    options: ["It is more fault-tolerant.", "It allows effective caching at name servers.", "It doesn't require a closure mechanism.", "It reduces load on high-level servers."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "DNS 'MX' resource records are used to identify:",
    options: ["The IP address of a host.", "A mail server for a node.", "A symbolic link.", "The canonical name."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "In 'Secure DNS,' resource records of the same type are:",
    options: ["Grouped into a signed set per zone.", "Distributed to every client.", "Encrypted using the client's public key.", "Deleted after 10 minutes."],
    answer: 0, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "What is the outcome of 'Naming in NFS' when different clients mount the same server?",
    options: ["They see the same namespace.", "They will have different, nonsharable namespaces.", "The server crashes.", "Access transparency is lost."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "Attribute-based naming is often compared to _______ services.",
    options: ["White pages.", "Yellow pages.", "Peer-to-peer.", "DNS."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "LDAP uses entries consisting of:",
    options: ["(Key, Successor) pairs.", "(Attribute, Value) pairs.", "(ID, MAC) pairs.", "(IP, Port) pairs."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "'Named-Data Networking (NDN)' retrieve entities using:",
    options: ["Physical address.", "Their name rather than address.", "A centralized tracker.", "Proof of Work hash."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "An LDAP 'Directory Information Tree' is:",
    options: ["A peer list.", "The naming graph where each node is a directory entry.", "A DNS lookup structure.", "Mobile IP organization."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "What happens to an NDN request if the data is in the router's 'Content Store'?",
    options: ["Forwarded to next router.", "Returned immediately.", "Dropped as duplicate.", "Wait for seeder."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "In HLS, an 'Insert' operation involves:",
    options: ["Creating forwarding pointers to the leaf.", "Broadcasting to all nodes.", "Updating root finger table.", "Moving entity to root."],
    answer: 0, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "Which DNS record type refers to a canonical name (alias)?",
    options: ["PTR.", "CNAME.", "SOA.", "SRV."],
    answer: 1, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "Resolving /home/maarten/mbox starting at a local file server is:",
    options: ["A closure mechanism.", "A soft link.", "Attribute-based naming.", "Vertical distribution."],
    answer: 0, chapter: 6, chapterTitle: "Naming"
  },
  {
    type: "mcq", question: "Replication is primarily used to increase reliability and _______:",
    options: ["Security.", "Performance.", "Transparency.", "Scalability."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "A 'Read-Write Conflict' occurs when:",
    options: ["Two processes read simultaneously.", "A read and write act concurrently.", "Two writes happen at different times.", "Server is stateless."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "Guaranteeing global ordering on all conflicting operations is costly because it:",
    options: ["Requires asymmetric encryption.", "Downgrades scalability due to global synchronization.", "Forces stateless servers.", "Eliminates caches."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "Sequential Consistency requires process operations appear in the sequence:",
    options: ["Physically sent.", "Specified by its program.", "Based on UTC.", "Determined by broker."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "Linearizability requires each operation appears to take effect:",
    options: ["Eventually.", "Instantaneously between start and completion.", "After disconnect.", "After Raft delay."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "In 'Causal Consistency,' concurrent writes:",
    options: ["Seen in same order everywhere.", "May be seen in different order by different processes.", "Are prohibited.", "Require majority vote."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "Entry Consistency requires data access only after:",
    options: ["OAuth login.", "All previous accesses to locks performed.", "Seeder provides chunk.", "TTL expired."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "A data store is 'Eventually Consistent' if, without updates:",
    options: ["It stays in error.", "All replicas eventually have same data.", "It deletes stale data.", "It uses primary-backup."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "Which is a 'Monotonic Problem' that doesn't require rollback?",
    options: ["Bank transfer.", "Filling a shopping cart.", "Bully election.", "Syncing clocks."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "A 'Conit' measures:",
    options: ["Bandwidth.", "Degree of consistency.", "Chord speed.", "Proof of Work zeros."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "Client-centric consistency is specifically relevant for _______ users.",
    options: ["Mainframe.", "Mobile.", "HPC.", "LAN."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "Monotonic Reads guarantee successive reads return:",
    options: ["Value 0.", "Same or more recent value.", "Original seeder value.", "Random replica value."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "Read Your Writes model ensures your browser shows:",
    options: ["Oldest version.", "Newest version you just updated.", "404 error.", "Causally related writes."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "In 'Writes Follow Reads,' a write is guaranteed to take place on:",
    options: ["Value 0.", "Same or more recent value than read.", "Primary server only.", "Local cache only."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "Which replica placement method is considered 'computationally cheap'?",
    options: ["Minimizing average distance.", "Placing in K regions with highest density.", "Selecting K-th largest AS.", "Chord successor algorithm."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "A 'Server-initiated replica' is:",
    options: ["Always present.", "Dynamically hosted on request of another server.", "Browser cache.", "Strong mobility only."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "If access to a file drops below threshold D, the file is:",
    options: ["Replicated.", "Dropped.", "Migrated.", "Encrypted."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "Passive Replication involves:",
    options: ["Propagating update operation.", "Transferring actual data.", "Waiting for client ask.", "Seeder handling all."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "In a 'Push-based' protocol, server state includes:",
    options: ["Nothing (stateless).", "List of client caches.", "Entire blockchain.", "DNS pointers."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "A 'Lease' allows dynamic switching between:",
    options: ["TCP/UDP.", "Pulling and pushing updates.", "Encryption types.", "Thread types."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "An 'Age-based lease' provides long leases to objects that:",
    options: ["Change every second.", "Haven't changed for long.", "Accessed by mobile.", "Managerial layer."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "Continuous Consistency allows replicas to differ in value or relative _______:",
    options: ["Security.", "Staleness.", "Latency.", "Bandwidth."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "In notation W1(xi; xj), what is indicated?",
    options: ["P1 produced xj concurrently to xi.", "P1 produced xj based on previous xi.", "P1 deleted both.", "P1 is reading both."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "Read Your Writes prevents which annoying experience?",
    options: ["Server crash.", "Seeing old version of page after 'save'.", "Slow internet.", "Unauthorized access."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "If server-initiated replica sees accesses between D and R, it will _______ the file.",
    options: ["Drop.", "Migrate.", "Replicate.", "Archive."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "Active Replication means _______ is propagated.",
    options: ["Notification.", "Update operation itself.", "Entire database.", "Client IP."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "Pull-based protocols have a client response time equal to:",
    options: ["Immediate.", "Fetch-update time.", "10 minutes.", "0ms."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "Under 'State-based leases,' if server is heavily loaded, it will _______ leases.",
    options: ["Lengthen.", "Shorten.", "Cancel.", "Encrypt."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "Web caches at ISPs reduce cross-ISP traffic and improve _______:",
    options: ["Security.", "Client-side performance.", "Scalability.", "Seeder reliability."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "The formula α(Tcached - Tlast_modified) + Tcached is for:",
    options: ["Chord updates.", "Web-cache freshness.", "Clock sync.", "Proof of Work."],
    answer: 1, chapter: 7, chapterTitle: "Consistency"
  },
  {
    type: "mcq", question: "Dependability includes reliability, safety, maintainability, and _______:",
    options: ["Scalability.", "Availability.", "Openness.", "Performance."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "Reliability is the probability component functioned correctly:",
    options: ["At random time.", "During interval [0, t) given it was correct at T=0.", "Only when client active.", "After 2PC."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "Mean Time Between Failures (MTBF) is:",
    options: ["MTTF - MTTR.", "MTTF + MTTR.", "MTTR / MTTF.", "Total uptime."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "In fault terminology, a 'Sloppy Programmer' is a:",
    options: ["Failure.", "Fault.", "Error.", "Catastrophe."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "Fault Tolerance involves building a component to _______ a fault.",
    options: ["Prevent.", "Mask.", "Predict.", "Remove."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "A 'Crash Failure' is one where the server _______:",
    options: ["Sends incorrect values.", "Halts, but was working until then.", "Becomes malicious.", "Ignores requests."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "An 'Omission Failure' specifically means the server fails to:",
    options: ["Use encryption.", "Respond to requests or send/receive messages.", "Process within time limit.", "Replicate data."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "Arbitrary Failures are sometimes qualified as:",
    options: ["Benign.", "Malicious.", "Synchronous.", "Predictable."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "In a 'Synchronous System,' we can reliably detect _______ failures.",
    options: ["Only crash.", "Omission and timing.", "Arbitrary malicious.", "Security."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "A 'Fail-Safe' halting type results in _______ failures.",
    options: ["Detectable crash.", "Arbitrary yet benign.", "Malicious.", "Invisible."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "Information Redundancy involves adding _______ to data units.",
    options: ["Extra servers.", "Extra bits (error recovery).", "Extra time.", "Digital signatures."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "To mask k concurrent arbitrary (Byzantine) failures, a group needs:",
    options: ["k+1.", "2k+1.", "3k+1.", "k^2."],
    answer: 2, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "CAP Theorem states you can only have two of: Consistency, Availability, and:",
    options: ["Performance.", "Partition tolerance.", "Portability.", "Privacy."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "In 'Heartbeat,' if P doesn't receive a message from Q in time t:",
    options: ["P kills Q.", "P suspects Q has crashed.", "Network partition assumed.", "P reboots."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "At-least-once RPC semantic is achieved if the server:",
    options: ["Never repeats.", "Guarantees carrying out operation at least once.", "Crashes after request.", "Reports timeout."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "Designing 'Idempotent' operations means:",
    options: ["Operations are fast.", "Repeating same operation is same as doing it once.", "Always encrypted.", "One client only."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "An 'Orphan Computation' occurs when:",
    options: ["Server is stateless.", "Client crashes after request, server continues.", "Seeder leaves swarm.", "DNS lookup fails."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "In 2PC Phase 1a, coordinator sends a:",
    options: ["GLOBAL-COMMIT.", "VOTE-REQUEST.", "VOTE-ABORT.", "READY signal."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "In 2PC, if participant sends VOTE-ABORT, it must _______ immediately.",
    options: ["Wait for coordinator.", "Abort local computation.", "Contact others.", "Log decision."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "If all 2PC participants are READY and coordinator fails:",
    options: ["They all commit.", "The protocol blocks.", "They all abort.", "Elect seeder."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "Backward Error Recovery brings a system back into:",
    options: ["Future error-free state.", "Previous error-free state via checkpoints.", "Stateless mode.", "Global-layer."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "A 'Recovery Line' is defined as the most recent _______ global checkpoint.",
    options: ["Encrypted.", "Consistent.", "Local.", "Administrational."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "Coordinated Checkpointing often uses a _______ protocol.",
    options: ["Bully election.", "Two-phase blocking.", "Random walk.", "Raft consensus."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "In 2PC, if recovering P finds Q is in ABORT, P should:",
    options: ["Contact another.", "Transition to ABORT.", "Commit.", "Wait for coordinator."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "For halting failures, a k-fault tolerant group needs _______ members.",
    options: ["k.", "k+1.", "2k+1.", "k^2."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "Which consensus requirement ensures output values are valid?",
    options: ["Agreement.", "Validity.", "Termination.", "Integrity."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "Fail-Stop failures are crash failures that are _______ detectable.",
    options: ["Never.", "Reliably.", "Eventually.", "Benignly."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "Reliable group communication agreement is needed on _______ before delivery.",
    options: ["Seeder IP.", "What group looks like.", "Data price.", "Next block hash."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "Crash ordering P -> M -> C (Process, Msg, Crash) results in:",
    options: ["No update/no msg.", "Success and completion msg.", "Update but no msg.", "Msg but no update."],
    answer: 2, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "If Recovering Participant finds another is in 'INIT', it transitions to:",
    options: ["COMMIT.", "ABORT.", "READY.", "WAIT."],
    answer: 1, chapter: 8, chapterTitle: "Fault Tolerance"
  },
  {
    type: "mcq", question: "Dependable System in security provides availability, reliability, safety, and:",
    options: ["Performance.", "Confidentiality and Integrity.", "Scalability.", "Hashing."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "Confidentiality ensures information is disclosed only to:",
    options: ["Authorized parties.", "Administrator.", "Seeders.", "DNS servers."],
    answer: 0, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "Unauthorized Information Modification is an attack on:",
    options: ["Confidentiality.", "Integrity.", "Availability.", "Authenticity."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "Authentication is the mechanism to:",
    options: ["Check access rights.", "Verify a claimed identity.", "Encrypt msg.", "Audit logs."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "Which principle forbids 'Security by Obscurity'?",
    options: ["Fail-safe defaults.", "Open design.", "Least privilege.", "Separation of privilege."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "Least Privilege states a process should operate with:",
    options: ["Admin rights.", "Fewest possible privileges needed.", "No privileges.", "Seeder privileges."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "End-to-End Security mechanisms are implemented at _______ layer.",
    options: ["Physical.", "Application.", "Network.", "Link."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "Trusted Computing Base (TCB) is the set of mechanisms to:",
    options: ["Run seeder.", "Enforce security policy.", "Decrypt chunks.", "Perform resolution."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "GDPR aims to protect:",
    options: ["Corporations.", "Personal data.", "Cloud servers.", "DNS roots."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "In cryptography, the original message is:",
    options: ["Ciphertext.", "Plaintext.", "Hash.", "Digest."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "Symmetric Cryptosystem keys are:",
    options: ["Different.", "The same.", "Public.", "Client-only."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "To keep a message private in asymmetric system, encrypt with:",
    options: ["Receiver's public key.", "Sender's private key.", "Shared secret.", "Seeder IP."],
    answer: 0, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "Homomorphic Encryption allows math operations on:",
    options: ["Root directory.", "Ciphertext.", "Seeder ID.", "Finger table."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "Secure hash H(m) makes it computationally _______ to find m from H(m).",
    options: ["Easy.", "Impossible.", "Optional.", "Necessary."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "To sign a message, Alice encrypts a digest with her:",
    options: ["Public key.", "Private key.", "Shared secret.", "Peer ID."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "For public-key distribution, we need a _______ to sign the key.",
    options: ["Seeder.", "Certification Authority.", "Root DNS.", "Tracker."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "Authentication based on 'What a client is' includes:",
    options: ["Passwords.", "Biometrics.", "ID cards.", "Cell phones."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "Authentication without integrity is _______.",
    options: ["Safe.", "Meaningless.", "Faster.", "Mandatory."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "A 'Nonce' proves:",
    options: ["Fast connection.", "Ownership of secret without sending it.", "Local IP.", "Seeder status."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "In a Key Distribution Center (KDC), a _______ is used to talk to Bob.",
    options: ["Forwarding pointer.", "Ticket.", "Finger table.", "Soft link."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "Eclipse Attack nodes return:",
    options: ["Incorrect UTC.", "Links only to other colluders.", "No data.", "Plaintext passwords."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "In blockchain, changing block Bk changes the _______ of Bk+1.",
    options: ["Price.", "Hash.", "Owner.", "TTL."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "Mandatory Access Control (MAC) access defined by:",
    options: ["Owner.", "Central administration.", "User role.", "Seeder."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "Role-Based Access Control (RBAC) authorizes by:",
    options: ["Individual identity.", "Role within organization.", "MAC address.", "Browser type."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "OAuth is used for _______ of access rights.",
    options: ["Removal.", "Delegation.", "Verification.", "Encryption."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "Signature-based IDS matches against:",
    options: ["Typical behavior.", "Patterns of known intrusions.", "Fingerprints.", "Root seeder."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "Anomaly-based IDS relies on:",
    options: ["Blockchain.", "AI.", "Sockets.", "Multithreading."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "Application-Level Gateway firewall inspects:",
    options: ["IP only.", "Content of messages.", "Registers.", "Seeder disk."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "Least Common Mechanism means components offered _______:",
    options: ["Expensive security.", "Same implementation.", "Complex code.", "Weakest encryption."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
  {
    type: "mcq", question: "Fail-Safe Defaults implies default should:",
    options: ["Be 'admin, admin'.", "Provide good protection.", "Be wide open.", "Be client-determined."],
    answer: 1, chapter: 9, chapterTitle: "Security"
  },
    /* ================= CHAPTER 1: INTRODUCTION AND GOALS ================= */

  {

    type: "mcq", question: "In the 'integrative view' of distributed systems, the primary action is:",

    options: ["Adding more computers to an existing system.", "Connecting existing networked computer systems into a larger system.", "Virtualizing the operating system layer.", "Reducing the number of links between nodes."],

    answer: 1, chapter: 1, chapterTitle: "Introduction and Goals"

  },

  {

    type: "mcq", question: "According to the 'expansive view,' a distributed system is realized by:",

    options: ["Merging multiple administrative domains.", "Extending an existing networked computer system with additional computers.", "Eliminating the middleware layer.", "Using only logically centralized solutions."],

    answer: 1, chapter: 1, chapterTitle: "Introduction and Goals"

  },

  {

    type: "mcq", question: "Which design goal refers to a system that offers components that can be easily used by or integrated into other systems?",

    options: ["Reliability", "Scalability", "Openness", "Distribution Transparency"],

    answer: 2, chapter: 1, chapterTitle: "Introduction and Goals"

  },

  {

    type: "mcq", question: "'Access Transparency' in distributed systems specifically hides:",

    options: ["Where an object is physically located.", "Differences in data representation and how an object is accessed.", "That an object may be moved while in use.", "That an object is replicated."],

    answer: 1, chapter: 1, chapterTitle: "Introduction and Goals"

  },

  {

    type: "mcq", question: "Which type of transparency hides the fact that an object may be shared by several independent users?",

    options: ["Replication transparency", "Failure transparency", "Concurrency transparency", "Migration transparency"],

    answer: 2, chapter: 1, chapterTitle: "Introduction and Goals"

  },

  {

    type: "mcq", question: "Why is 'full distribution transparency' sometimes considered a bad goal?",

    options: ["It makes the system too open to attackers.", "It is impossible to hide communication latencies.", "It requires the use of only centralized solutions.", "It prevents the use of asynchronous communication."],

    answer: 1, chapter: 1, chapterTitle: "Introduction and Goals"

  },

  {

    type: "mcq", question: "In an open system, 'Mechanisms' are used to:",

    options: ["Define what level of secrecy is required.", "Implement the actual functionality (e.g., offering encryption algorithms).", "Decide which operations code can perform.", "Set the Quality of Service (QoS) requirements."],

    answer: 1, chapter: 1, chapterTitle: "Introduction and Goals"

  },

  {

    type: "mcq", question: "In the context of dependability, 'Safety' refers to:",

    options: ["Readiness for usage.", "Continuity of service delivery.", "A very low probability of catastrophes.", "How easily a failed system can be repaired."],

    answer: 2, chapter: 1, chapterTitle: "Introduction and Goals"

  },

  {

    type: "mcq", question: "The metric 'Mean Time To Failure' (MTTF) represents:",

    options: ["The average time needed to repair a component.", "The average time until a component fails.", "The sum of MTTF and MTTR.", "The total uptime of the system."],

    answer: 1, chapter: 1, chapterTitle: "Introduction and Goals"

  },

  {

    type: "mcq", question: "A 'Failure' is defined as a component:",

    options: ["Containing a programming bug.", "Not living up to its specifications.", "Having a sloppy programmer as its cause.", "Being attacked by a hacker."],

    answer: 1, chapter: 1, chapterTitle: "Introduction and Goals"

  },

  {

    type: "mcq", question: "'Fault Removal' is a process that involves:",

    options: ["Hiring better programmers.", "Building components with redundancy.", "Reducing the presence, number, or seriousness of a fault.", "Estimating the future incidence of faults."],

    answer: 2, chapter: 1, chapterTitle: "Introduction and Goals"

  },

  {

    type: "mcq", question: "In a centralized service modeled as a queuing system, the 'Response Time' is:",

    options: ["The rate at which requests arrive.", "The total time taken to process a request after submission.", "The capacity of the server in requests per second.", "The length of the queue."],

    answer: 1, chapter: 1, chapterTitle: "Introduction and Goals"

  },

  {

    type: "mcq", question: "Conflicting policies concerning usage and payment are the essence of problems in:",

    options: ["Size scalability.", "Geographical scalability.", "Administrative scalability.", "Relocation transparency."],

    answer: 2, chapter: 1, chapterTitle: "Introduction and Goals"

  },

  {

    type: "mcq", question: "In parallel computing, a 'Multicomputer' is different from a 'Multiprocessor' because:",

    options: ["It uses shared memory.", "It has no shared memory; each processor has its own private memory.", "It cannot be used for distributed systems.", "It requires synchronous communication."],

    answer: 1, chapter: 1, chapterTitle: "Introduction and Goals"

  },

  {

    type: "mcq", question: "What was the primary reason 'Distributed Shared Memory' systems were abandoned?",

    options: ["They were too expensive to build.", "Their performance could never compete with that of multiprocessors.", "They lacked security mechanisms.", "They could not scale beyond a single LAN."],

    answer: 1, chapter: 1, chapterTitle: "Introduction and Goals"

  },

  {

    type: "mcq", question: "In Grid Computing, 'Virtual Organizations' are used to:",

    options: ["Replace physical hardware with VMs.", "Group users or IDs to allow for authorization on resource allocation.", "Hide the network layer from the application.", "Implement 2-Phase Commit protocols."],

    answer: 1, chapter: 1, chapterTitle: "Introduction and Goals"

  },

  {

    type: "mcq", question: "Which grid computing layer provides interfaces to local resources for querying state and locking?",

    options: ["Fabric layer", "Connectivity layer", "Collective layer", "Application layer"],

    answer: 0, chapter: 1, chapterTitle: "Introduction and Goals"

  },

  {

    type: "mcq", question: "In transaction primitives, 'ABORT TRANSACTION' results in:",

    options: ["Terminating the transaction and trying to commit.", "Permanent changes to the database.", "Killing the transaction and restoring old values.", "Marking the start of a new nested transaction."],

    answer: 2, chapter: 1, chapterTitle: "Introduction and Goals"

  },

  {

    type: "mcq", question: "The 'ACID' property 'Isolated' means that:",

    options: ["The transaction happens indivisibly.", "Changes are permanent after a commit.", "There is no mutual interference between concurrent transactions.", "System invariants are not violated."],

    answer: 2, chapter: 1, chapterTitle: "Introduction and Goals"

  },

  {

    type: "mcq", question: "A 'Pervasive System' that is continuously present and interacts continuously with the user is:",

    options: ["A mobile computing system.", "A sensor network.", "A ubiquitous computing system.", "A cluster computing system."],

    answer: 2, chapter: 1, chapterTitle: "Introduction and Goals"

  },



  /* ================= CHAPTER 2: ARCHITECTURES ================= */

  {

    type: "mcq", question: "In architectural styles, a 'Component' is a modular unit that is:",

    options: ["Permanently fixed to the hardware.", "Replaceable while a system continues to operate.", "Only used in Object-Oriented programming.", "Responsible for routing IP packets."],

    answer: 1, chapter: 2, chapterTitle: "Architectures"

  },

  {

    type: "mcq", question: "In a 'Mixed Layered' architecture:",

    options: ["Communication only flows to the layer directly below.", "Layers can be skipped in the pipeline.", "All layers are on different machines.", "Communication can only move upwards."],

    answer: 1, chapter: 2, chapterTitle: "Architectures"

  },

  {

    type: "mcq", question: "The 'Application Interface Layer' in the three-layered view is responsible for:",

    options: ["Processing functions without specific data.", "Interfacing to users or external applications.", "Manipulating raw data in the database.", "Managing the virtual machine monitor."],

    answer: 1, chapter: 2, chapterTitle: "Architectures"

  },

  {

    type: "mcq", question: "In the 'Object-Based Style,' components are objects connected via:",

    options: ["Direct memory access.", "Procedure calls.", "Global variables.", "Physical wires."],

    answer: 1, chapter: 2, chapterTitle: "Architectures"

  },

  {

    type: "mcq", question: "A core principle of RESTful architectures is that messages must be:",

    options: ["Encrypted with AES-256.", "Fully self-described.", "Compressed using GZIP.", "Smaller than 512 bytes."],

    answer: 1, chapter: 2, chapterTitle: "Architectures"

  },

  {

    type: "mcq", question: "In Amazon S3, what cannot be placed inside another bucket?",

    options: ["Objects", "Files", "Buckets", "Metadata"],

    answer: 2, chapter: 2, chapterTitle: "Architectures"

  },

  {

    type: "mcq", question: "What is the 'catch' mentioned regarding the simplicity of RESTful interfaces?",

    options: ["They require expensive hardware.", "Much needs to be done within the parameter space.", "They only work over satellite links.", "They cannot support GET operations."],

    answer: 1, chapter: 2, chapterTitle: "Architectures"

  },

  {

    type: "mcq", question: "Coordination that is 'Referentially Decoupled' and 'Temporally Coupled' is:",

    options: ["Direct coordination.", "Mailbox coordination.", "Event-based coordination.", "Shared data space coordination."],

    answer: 2, chapter: 2, chapterTitle: "Architectures"

  },

  {

    type: "mcq", question: "The Linda Tuple Space 'out(t)' operation:",

    options: ["Removes a tuple matching template t.", "Obtains a copy of a matching tuple.", "Adds tuple t to the tuple space.", "Blocks until a tuple is found."],

    answer: 2, chapter: 2, chapterTitle: "Architectures"

  },

  {

    type: "mcq", question: "What happens if you call 'out(t)' twice in a row in a Linda Tuple Space?",

    options: ["The second call is ignored.", "The first tuple is overwritten.", "Two copies of tuple t are stored (multiset model).", "The system crashes due to a race condition."],

    answer: 2, chapter: 2, chapterTitle: "Architectures"

  },

  {

    type: "mcq", question: "In Publish-Subscribe systems, 'Topic-based' subscriptions specify interest via:",

    options: ["A range of values for an attribute.", "An 'attribute = value' series.", "The physical address of the publisher.", "A Proof of Stake token."],

    answer: 1, chapter: 2, chapterTitle: "Architectures"

  },

  {

    type: "mcq", question: "An 'Interceptor' in middleware is used to:",

    options: ["Block all incoming traffic from the WAN.", "Adapt the behavior of middleware by breaking the usual flow of control.", "Replace the need for a dispatcher.", "Encrypt communication between layers."],

    answer: 1, chapter: 2, chapterTitle: "Architectures"

  },

  {

    type: "mcq", question: "In the 'Remote Access' model of file systems:",

    options: ["The client requests the file, and the file is moved to the client.", "The file stays on the server, and the client requests access to parts of it.", "The client always sends the file back when done.", "It is identical to the FTP model."],

    answer: 1, chapter: 2, chapterTitle: "Architectures"

  },

  {

    type: "mcq", question: "In the 'Upload/Download' model (like Dropbox or FTP):",

    options: ["Accesses are done on the server.", "The file is moved to the client, and returned when done.", "No local copies are ever made.", "The server is always stateless."],

    answer: 1, chapter: 2, chapterTitle: "Architectures"

  },

  {

    type: "mcq", question: "Horizontal distribution splits a server into parts where each part operates on:",

    options: ["Different logical layers.", "Its own share of the complete data set.", "Different operating systems.", "The same data set using global synchronization."],

    answer: 1, chapter: 2, chapterTitle: "Architectures"

  },

  {

    type: "mcq", question: "In a 'Hypercube' P2P layout, looking up data with key k means:",

    options: ["Contacting the seeder.", "Routing the request to the node with identifier k.", "Broadcasting to all neighbors.", "Using a random walk."],

    answer: 1, chapter: 2, chapterTitle: "Architectures"

  },

  {

    type: "mcq", question: "In a Chord ring, the 'Successor' of key k is the node with:",

    options: ["The largest identifier less than k.", "The smallest identifier greater than or equal to k.", "Identifier exactly equal to k - 1.", "The highest capacity in the network."],

    answer: 1, chapter: 2, chapterTitle: "Architectures"

  },

  {

    type: "mcq", question: "In unstructured P2P, a node ignores a 'Flooding' request if:",

    options: ["It does not have the data.", "It has seen the request before.", "The TTL is greater than 10.", "It is a super-peer."],

    answer: 1, chapter: 2, chapterTitle: "Architectures"

  },

  {

    type: "mcq", question: "In Cloud Computing, the 'Hardware' layer includes:",

    options: ["Office suites like spreadsheets.", "Processors, routers, power, and cooling systems.", "Virtual machine monitors.", "Database software frameworks."],

    answer: 1, chapter: 2, chapterTitle: "Architectures"

  },

  {

    type: "mcq", question: "The 'Cloud-Edge Continuum' shows that as you move toward the IoT, you get more:",

    options: ["Reliable connectivity.", "Context awareness and mobility support.", "Computing power and storage.", "Data longevity."],

    answer: 1, chapter: 2, chapterTitle: "Architectures"

  },



  /* ================= CHAPTER 3: PROCESSES ================= */

  {

    type: "mcq", question: "Saving a 'Thread Context' implies:",

    options: ["Deleting the process from memory.", "Stopping execution and saving all data needed to continue later.", "Trapping to the kernel for every instruction.", "Sharing the address space with a different process."],

    answer: 1, chapter: 3, chapterTitle: "Processes"

  },

  {

    type: "mcq", question: "The 'Processor Context' is specifically the collection of values in:",

    options: ["The main RAM.", "The registers (stack pointer, program counter, etc.).", "The virtual machine monitor.", "The hard disk cache."],

    answer: 1, chapter: 3, chapterTitle: "Processes"

  },

  {

    type: "mcq", question: "The 'Process Context' includes the thread context plus at least:",

    options: ["The user's ID.", "Memory Management Unit (MMU) register values.", "The seeder's IP address.", "The BIOS settings."],

    answer: 1, chapter: 3, chapterTitle: "Processes"

  },

  {

    type: "mcq", question: "Which of the following is a 'Direct Cost' of a context switch?",

    options: ["Reorganizing the cache.", "The actual switch and executing the handler code.", "Messing up the LRU/MRU order in RAM.", "Performance loss due to cache misses."],

    answer: 1, chapter: 3, chapterTitle: "Processes"

  },

  {

    type: "mcq", question: "What is an 'Indirect Cost' of a context switch?",

    options: ["Saving the program counter.", "Costs caused by messing up the cache.", "The execution of the interrupt handler.", "Loading the new stack pointer."],

    answer: 1, chapter: 3, chapterTitle: "Processes"

  },

  {

    type: "mcq", question: "In the 'Combined User/Kernel' threading model, if a user thread calls a blocking operation:",

    options: ["The entire process blocks.", "A context switch is done to a runnable user thread.", "The kernel thread is destroyed.", "The hardware triggers a reboot."],

    answer: 1, chapter: 3, chapterTitle: "Processes"

  },

  {

    type: "mcq", question: "A typical web browser uses threads primarily for:",

    options: ["Achieving massive CPU parallelism.", "Logically organizing the browser's moving parts.", "Reducing the cost of electricity.", "Avoiding the use of the network layer."],

    answer: 1, chapter: 3, chapterTitle: "Processes"

  },

  {

    type: "mcq", question: "In the 'Finite-State Machine' server model, characteristics include:",

    options: ["No parallelism, blocking calls.", "Parallelism, nonblocking (asynchronous) system calls.", "Parallelism, blocking system calls.", "No parallelism, nonblocking system calls."],

    answer: 1, chapter: 3, chapterTitle: "Processes"

  },

  {

    type: "mcq", question: "Virtualization is important because hardware changes ________ than software.",

    options: ["Slower", "Faster", "At the same rate", "Not at all"],

    answer: 1, chapter: 3, chapterTitle: "Processes"

  },

  {

    type: "mcq", question: "Which virtualization level allows executing 'Privileged' instructions only by the OS?",

    options: ["Library calls (API).", "Instruction set architecture.", "System calls.", "Union file systems."],

    answer: 1, chapter: 3, chapterTitle: "Processes"

  },

  {

    type: "mcq", question: "In a 'Hosted VMM' (like VirtualBox on Windows):",

    options: ["The VMM runs directly on the hardware.", "The VMM runs atop a host operating system.", "There is no host OS.", "It uses process-level virtualization like Java."],

    answer: 1, chapter: 3, chapterTitle: "Processes"

  },

  {

    type: "mcq", question: "A 'Container' (like Docker) provides resource restrictions via:",

    options: ["Namespaces.", "Control groups.", "Union file systems.", "Privileged instructions."],

    answer: 1, chapter: 3, chapterTitle: "Processes"

  },

  {

    type: "mcq", question: "In the PlanetLab system, a 'Slice' is:",

    options: ["A single physical CPU.", "A collection of Vservers distributed across multiple machines.", "A type of hosted VMM.", "A block in a blockchain."],

    answer: 1, chapter: 3, chapterTitle: "Processes"

  },

  {

    type: "mcq", question: "In the X Window System, the application acts as a _______ to the X-kernel.",

    options: ["Server", "Client", "Wrapper", "Proxy"],

    answer: 1, chapter: 3, chapterTitle: "Processes"

  },

  {

    type: "mcq", question: "The Google Chromebook is an example of a:",

    options: ["High-performance cluster.", "Virtual desktop environment using a web browser.", "Grid computing node.", "Single-tiered mainframe."],

    answer: 1, chapter: 3, chapterTitle: "Processes"

  },

  {

    type: "mcq", question: "'Failure Transparency' is often placed at the client to:",

    options: ["Encrypt the data.", "Mask server and communication failures.", "Speed up the CPU.", "Locate the nearest seeder."],

    answer: 1, chapter: 3, chapterTitle: "Processes"

  },

  {

    type: "mcq", question: "In a 'Super-server' model (like Inetd in Unix):",

    options: ["The client connects to every server at once.", "The super-server listens for requests and creates a specific server.", "There are no ports used.", "Every server is iterative."],

    answer: 1, chapter: 3, chapterTitle: "Processes"

  },

  {

    type: "mcq", question: "'Out-of-band' communication for urgent data can be handled by:",

    options: ["Deleting the cache.", "Using a separate port for urgent messages.", "Stopping the dispatcher.", "Using only weak mobility."],

    answer: 1, chapter: 3, chapterTitle: "Processes"

  },

  {

    type: "mcq", question: "In an object server, an 'Object Adapter' is used to:",

    options: ["Route IP packets.", "Implement a specific activation policy for objects.", "Encrypt the object's state.", "Manage the hardware cooling."],

    answer: 1, chapter: 3, chapterTitle: "Processes"

  },

  {

    type: "mcq", question: "According to the sources, why are 'Mobile Agents' (MA) used?",

    options: ["To keep code, execution, and resources on the server.", "To move code and execution state to the resource.", "To provide only weak mobility.", "To eliminate the need for a client."],

    answer: 1, chapter: 3, chapterTitle: "Processes"

  },



  /* ================= CHAPTER 4: COMMUNICATION ================= */

  {

    type: "mcq", question: "In the OSI model, the 'Presentation' layer is responsible for:",

    options: ["Routing packets.", "Defining bits on an ethernet cord.", "Handling differences in data representation.", "Managing the session."],

    answer: 2, chapter: 4, chapterTitle: "Communication"

  },

  {

    type: "mcq", question: "The 'Data Link' layer's primary job is to:",

    options: ["Transmit raw bits.", "Assemble bits into frames for error and flow control.", "Route packets between computers.", "Handle (un)marshalling of data."],

    answer: 1, chapter: 4, chapterTitle: "Communication"

  },

  {

    type: "mcq", question: "In the 'Adapted Layering Scheme', 'Middleware' sits between:",

    options: ["Application and Hardware.", "Application and OS.", "OS and Hardware.", "Transport and Network."],

    answer: 1, chapter: 4, chapterTitle: "Communication"

  },

  {

    type: "mcq", question: "'Transient Communication' means a message is discarded if:",

    options: ["It is not encrypted.", "It cannot be delivered at the next server or receiver.", "It is larger than 1024 bytes.", "The seeder is a leecher."],

    answer: 1, chapter: 4, chapterTitle: "Communication"

  },

  {

    type: "mcq", question: "Synchronization 'at request delivery' means the client blocks until:",

    options: ["The request is submitted to the local OS.", "The request reaches the receiver.", "The server finishes processing and replies.", "The network latency is zero."],

    answer: 1, chapter: 4, chapterTitle: "Communication"

  },

  {

    type: "mcq", question: "A major drawback of 'Synchronous Communication' is that:",

    options: ["It is too fast for most users.", "The client cannot do other work while waiting for a reply.", "It only works with persistent messages.", "It requires a 200ms Raft delay."],

    answer: 1, chapter: 4, chapterTitle: "Communication"

  },

  {

    type: "mcq", question: "In RPC, 'Copy in/copy out' semantics mean that:",

    options: ["References to global variables are used.", "Nothing can be assumed about parameter values while the procedure executes.", "The code is always moved to the data.", "Data is never actually copied."],

    answer: 1, chapter: 4, chapterTitle: "Communication"

  },

  {

    type: "mcq", question: "An 'Asynchronous RPC' is used to:",

    options: ["Force the client to block.", "Let the client continue without waiting for a server answer.", "Ensure reliable UDP delivery.", "Encrypt the stack pointer."],

    answer: 1, chapter: 4, chapterTitle: "Communication"

  },

  {

    type: "mcq", question: "In the Berkeley socket interface, 'Bind' is used to:",

    options: ["Establish a connection.", "Attach a local address to a socket.", "Listen for incoming requests.", "Send 1024 bytes."],

    answer: 1, chapter: 4, chapterTitle: "Communication"

  },

  {

    type: "mcq", question: "ZeroMQ (ZMQ) pairs sockets and ensures all communication is:",

    options: ["Synchronous.", "Asynchronous.", "Iterative.", "Bit-stream oriented."],

    answer: 1, chapter: 4, chapterTitle: "Communication"

  },

  {

    type: "mcq", question: "The ZMQ 'Pipeline' pattern is implemented using which socket types?",

    options: ["PUB and SUB.", "REQ and REP.", "PUSH and PULL.", "GET and PUT."],

    answer: 2, chapter: 4, chapterTitle: "Communication"

  },

  {

    type: "mcq", question: "In MPI, the operation 'MPI_BSEND':",

    options: ["Sends a message and waits for transmission.", "Appends an outgoing message to a local send buffer.", "Receives a message and blocks.", "Checks for a message without blocking."],

    answer: 1, chapter: 4, chapterTitle: "Communication"

  },

  {

    type: "mcq", question: "In Message-Oriented Middleware (MOM), a 'POLL' operation:",

    options: ["Blocks until a message arrives.", "Checks a queue and removes a message without blocking.", "Installs a notification handler.", "Sends a message to a group."],

    answer: 1, chapter: 4, chapterTitle: "Communication"

  },

  {

    type: "mcq", question: "In the AMQP model, a 'Connection' is a container for:",

    options: ["Hardware registers.", "Several one-way channels.", "Physical clocks.", "Finger tables."],

    answer: 1, chapter: 4, chapterTitle: "Communication"

  },

  {

    type: "mcq", question: "In AMQP code, 'message.ack()' is used by the consumer to:",

    options: ["Encrypt the message.", "Acknowledge receipt of the message.", "Publish the message to an exchange.", "Close the connection."],

    answer: 1, chapter: 4, chapterTitle: "Communication"

  },

  {

    type: "mcq", question: "In Application-Level Multicasting (ALM), a 'Mesh' network requires:",

    options: ["No routing at all.", "A form of routing to handle multiple paths.", "A single seeder only.", "A purely layered architecture."],

    answer: 1, chapter: 4, chapterTitle: "Communication"

  },

  {

    type: "mcq", question: "'Link Stress' is a metric in ALM that measures:",

    options: ["The CPU usage of the router.", "How often a message crosses the same physical link.", "The probability of a crash.", "The length of a forwarding pointer chain."],

    answer: 1, chapter: 4, chapterTitle: "Communication"

  },

  {

    type: "mcq", question: "In 'Anti-entropy' epidemic protocols, a 'Push-pull' operation results in:",

    options: ["Only P getting updates from Q.", "P and Q both sending updates to each other.", "The deletion of all updates.", "A centralized leader election."],

    answer: 1, chapter: 4, chapterTitle: "Communication"

  },

  {

    type: "mcq", question: "In 'Rumor Spreading,' a server stops spreading an update with probability:",

    options: ["1.0 (always).", "p_stop.", "0 (never).", "TTL / 100."],

    answer: 1, chapter: 4, chapterTitle: "Communication"

  },

  {

    type: "mcq", question: "According to the sources, is rumor spreading alone enough to update all servers?",

    options: ["Yes, always.", "No, it is not enough.", "Only if the network is a ring.", "Only if the seeder is online."],

    answer: 1, chapter: 4, chapterTitle: "Communication"

  },



  /* ================= CHAPTER 5: COORDINATION ================= */

  {

    type: "mcq", question: "'Leap Seconds' are introduced in UTC to:",

    options: ["Speed up logical clocks.", "Compensate for the fact that days are getting longer.", "Synchronize with the root DNS.", "Fix bugs in the OS kernel."],

    answer: 1, chapter: 5, chapterTitle: "Coordination"

  },

  {

    type: "mcq", question: "'Precision' (π) in clock synchronization is the goal to keep the deviation between:",

    options: ["A clock and UTC time.", "Any two clocks on any two machines within a bound.", "The seeder and the tracker.", "The MMU and the registers."],

    answer: 1, chapter: 5, chapterTitle: "Coordination"

  },

  {

    type: "mcq", question: "In 'External Synchronization,' we aim to keep clocks bound to:",

    options: ["Each other.", "A global time value like UTC (accuracy α).", "The network latency.", "The highest process ID."],

    answer: 1, chapter: 5, chapterTitle: "Coordination"

  },

  {

    type: "mcq", question: "The 'Maximum Clock Drift Rate' (ρ) specifies:",

    options: ["The speed of the network.", "How much a hardware clock's frequency deviates from the ideal.", "The number of leading zeros in Proof of Work.", "The time to failure."],

    answer: 1, chapter: 5, chapterTitle: "Coordination"

  },

  {

    type: "mcq", question: "In the Network Time Protocol (NTP), we choose the offset θ for which:",

    options: ["The delay δ was maximal.", "The delay δ was minimal.", "The timestamp was zero.", "The process ID was highest."],

    answer: 1, chapter: 5, chapterTitle: "Coordination"

  },

  {

    type: "mcq", question: "'Reference Broadcast Synchronization' (RBS) is unique because it:",

    options: ["Uses a centralized timeserver.", "Minimizes the critical path by recording receipt time of a broadcast.", "Uses asymmetric encryption for time.", "Only works on WANs."],

    answer: 1, chapter: 5, chapterTitle: "Coordination"

  },

  {

    type: "mcq", question: "The 'Happened-before' relation is a _______ ordering of events.",

    options: ["Total", "Partial", "Random", "Linear"],

    answer: 1, chapter: 5, chapterTitle: "Coordination"

  },

  {

    type: "mcq", question: "In Lamport's clocks, 'Property P1' states that if a → b in the same process:",

    options: ["C(a) = C(b).", "C(a) < C(b).", "C(a) > C(b).", "C(a) is random."],

    answer: 1, chapter: 5, chapterTitle: "Coordination"

  },

  {

    type: "mcq", question: "In logical clock diagrams, how are 'ties' (same timestamp) broken?",

    options: ["They are ignored.", "Using process IDs.", "By the coordinator.", "Using UTC time."],

    answer: 1, chapter: 5, chapterTitle: "Coordination"

  },

  {

    type: "mcq", question: "In 'Totally Ordered Multicast,' a process Pi sends a message mi with a:",

    options: ["Nonce.", "Timestamp.", "Finger table.", "Soft link."],

    answer: 1, chapter: 5, chapterTitle: "Coordination"

  },

  {

    type: "mcq", question: "Pi delivers mi in totally ordered multicast only if mi is at the head and:",

    options: ["The seeder acknowledges it.", "For each Pk, there is a message with a larger timestamp in queue.", "The network is partitioned.", "The clock is internal."],

    answer: 1, chapter: 5, chapterTitle: "Coordination"

  },

  {

    type: "mcq", question: "Vector clocks VCi[j] = k means Pi knows that:",

    options: ["k events have occurred at process Pj.", "The seeder has k chunks.", "The network latency is k ms.", "There are k leading zeros."],

    answer: 0, chapter: 5, chapterTitle: "Coordination"

  },

  {

    type: "mcq", question: "If ts(m2) < ts(m4) in vector clocks, we conclude that:",

    options: ["m2 and m4 conflict.", "m2 may causally precede m4.", "m4 was sent by a seeder.", "The clocks are out of sync."],

    answer: 1, chapter: 5, chapterTitle: "Coordination"

  },

  {

    type: "mcq", question: "In the 'Token Ring' mutual exclusion algorithm, an overlay is a:",

    options: ["Mesh.", "Logical ring.", "Tree.", "Hypercube."],

    answer: 1, chapter: 5, chapterTitle: "Coordination"

  },

  {

    type: "mcq", question: "In 'Decentralized Mutual Exclusion,' access to a resource requires:",

    options: ["A token.", "A majority vote from coordinators of replicas.", "A Bully election.", "A 200ms Raft delay."],

    answer: 1, chapter: 5, chapterTitle: "Coordination"

  },

  {

    type: "mcq", question: "'Election by Bullying' starts when a process notices:",

    options: ["A seeder has joined.", "The coordinator is no longer responding.", "Its clock has drifted.", "A new block was appended."],

    answer: 1, chapter: 5, chapterTitle: "Coordination"

  },

  {

    type: "mcq", question: "In a 'Ring Election,' the initiator sends a message containing:",

    options: ["The token.", "A list of all living processes.", "The Proof of Work hash.", "The root DNS IP."],

    answer: 1, chapter: 5, chapterTitle: "Coordination"

  },

  {

    type: "mcq", question: "In the ZooKeeper leader election, s* updates its leader if it receives a voteTX that is:",

    options: ["Smaller than its own lastTX.", "Larger than its own lastTX.", "Equal to 0.", "Encrypted with RSA."],

    answer: 1, chapter: 5, chapterTitle: "Coordination"

  },

  {

    type: "mcq", question: "In 'Proof of Work,' the probability p that a random guess for h~ will suffice is:",

    options: ["(1/2)^K.", "K / 64.", "1.0.", "(1/ID)."],

    answer: 0, chapter: 5, chapterTitle: "Coordination"

  },

  {

    type: "mcq", question: "The 'Indegree Distribution' in peer sampling tells us:",

    options: ["The total number of nodes.", "Which fraction of nodes have how many other nodes pointing to them.", "The seeder bandwidth.", "The time until next election."],

    answer: 1, chapter: 5, chapterTitle: "Coordination"

  },

{
  type: "mcq",
  question: "How does the provided text define a 'Processor' in the context of virtualization?",
  options: [
    "A hardware-only circuit without software instructions.",
    "A component providing a set of instructions and the capability of automatically executing them.",
    "A software-based memory management unit (MMU).",
    "A set of threads waiting for execution."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "In the hierarchy of virtualized components, what is a 'Thread' primarily considered?",
  options: [
    "A physical CPU core.",
    "A heavy-weight software processor with independent address space.",
    "A minimal software processor in whose context a series of instructions can be executed.",
    "A collection of multiple processes."
  ],
  answer: 2,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Which of the following defines a 'Process'?",
  options: [
    "A single instruction sequence without a context.",
    "A software processor in whose context one or more threads may be executed.",
    "A hardware-bound instruction set.",
    "A specific type of physical register."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "What specific action is implied by 'saving a thread context'?",
  options: [
    "Deleting the instruction set of the processor.",
    "Stopping execution and saving all data needed to continue execution later.",
    "Clearing the hardware registers to zero.",
    "Moving the process to a different physical machine."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Which of the following is NOT part of the 'Processor context'?",
  options: ["Stack pointer.", "Addressing registers.", "Program counter.", "MMU register values."],
  answer: 3,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "'Thread context' is explicitly defined as the combination of:",
  options: ["Processor context and MMU values.", "Process context and physical clock time.", "Processor context and state.", "Memory address space and I/O tables."],
  answer: 2,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "According to Observation 1, where can thread context switching be performed?",
  options: [
    "Only within the hardware logic gates.",
    "Entirely independent of the operating system.",
    "Only by trapping to the kernel.",
    "Inside the physical processor core."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Why is process switching more expensive than thread switching?",
  options: [
    "Processes have more threads.",
    "It involves getting the OS in the loop and trapping to the kernel.",
    "Hardware interrupts are disabled during process switches.",
    "Processes share the same address space."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "According to Observation 3, which operation is 'much cheaper'?",
  options: [
    "Creating and destroying processes.",
    "Creating and destroying threads.",
    "Creating a new physical processor.",
    "Switching between two physical processors."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Which component is added to thread context to create 'Process context'?",
  options: ["Program counter.", "Stack pointer.", "MMU register values.", "Instruction set."],
  answer: 2,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "What is a primary reason to use threads regarding I/O operations?",
  options: [
    "To block the entire process during I/O.",
    "To avoid needless blocking by switching the CPU to another thread in the same process.",
    "To prevent the hardware from executing instructions.",
    "To eliminate the need for an operating system."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "How do threads exploit parallelism on a multicore processor?",
  options: [
    "By sharing a single program counter.",
    "By scheduling different threads to run in parallel on different cores.",
    "By eliminating the software context.",
    "By trapping to the kernel for every instruction."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "What is a notable trade-off of threads sharing the same address space?",
  options: [
    "They are more prone to errors because one thread can access another's memory.",
    "Context switching becomes slower than process switching.",
    "They cannot be used on multicore systems.",
    "They require more support from the hardware to protect memory."
  ],
  answer: 0,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Executing a thread is defined in the source as:",
  options: [
    "Saving the processor context.",
    "Executing a series of instructions in the context of that thread.",
    "Creating a new MMU register value.",
    "Trapping to the kernel."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "A system with three threads in one process share:",
  options: [
    "Separate MMU register values.",
    "The same address space.",
    "Separate physical processors only.",
    "Different operating systems."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Which of the following is a component of Processor context?",
  options: ["User IDs.", "Vserver identifiers.", "Stack pointer.", "TCP Urgent data."],
  answer: 2,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "The capability of automatically executing instructions is a feature of the:",
  options: ["Thread only.", "Process only.", "Processor.", "MMU."],
  answer: 2,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Which context is the 'minimal collection of values stored in the registers of a processor'?",
  options: ["Thread context.", "Process context.", "Processor context.", "OS context."],
  answer: 2,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "If a process has five threads, how many address spaces does it have?",
  options: ["Five.", "One.", "Zero.", "Ten."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Why can thread context switching be faster?",
  options: [
    "It avoids changing MMU register values and trapping to the kernel.",
    "It uses more hardware registers.",
    "It requires a reboot of the system.",
    "It only works on single-threaded processes."
  ],
  answer: 0,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "In the source context, 'state' is a specific part of which context?",
  options: ["Processor context.", "Thread context.", "I/O context.", "Instruction set."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Creating a new process involves which expensive operation compared to threads?",
  options: [
    "Saving only the program counter.",
    "Creating a new address space and trapping to the kernel.",
    "Using the same MMU values.",
    "Running a dispatcher."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Which of the following is a 'virtual processor in software'?",
  options: ["A hard disk.", "A thread.", "A network cable.", "A physical transistor."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Multiple threads in one process are described as being in:",
  options: [
    "Different hardware contexts.",
    "The context of that process.",
    "Separate operating systems.",
    "Different address spaces."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Which element is common to both processor context and thread context?",
  options: ["The address space.", "Register values like the program counter.", "MMU settings.", "File descriptors."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Thread creation is 'cheaper' because:",
  options: [
    "Threads don't have registers.",
    "They do not require a separate address space.",
    "They are hardware-only.",
    "They don't use instruction sets."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "A single-threaded process doing I/O will:",
  options: ["Switch to a worker thread.", "Block.", "Execute in parallel.", "Trigger a leap second."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Addressing registers are part of the:",
  options: ["MMU only.", "Processor context.", "Network layer.", "Application layer."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "What is the relationship between Process Context (Pc) and Thread Context (Tc)?",
  options: ["Pc = Tc + MMU register values.", "Tc = Pc + MMU register values.", "Pc = Tc - Processor context.", "They are identical."],
  answer: 0,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "'Software processor' is a term used to describe:",
  options: ["Only the physical CPU.", "Threads and Processes.", "Only the MMU.", "The instruction set architecture."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "If a thread is 'stopped' to be continued later, what must be saved?",
  options: ["The entire RAM.", "The thread context.", "The physical hardware clock.", "The BIOS settings."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "In a multithreaded process, what can the OS do when one thread blocks?",
  options: [
    "Shutdown the machine.",
    "Switch the CPU to another thread in that process.",
    "Wait for the I/O to finish before doing anything else.",
    "Clear the address space."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Large applications are better structured as:",
  options: [
    "A single process without threads.",
    "A collection of physical processors.",
    "Multiple threads instead of multiple processes to avoid switching costs.",
    "A single thread with multiple address spaces."
  ],
  answer: 2,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "'No support from OS/HW to protect threads' refers to:",
  options: ["I/O blocking.", "Memory protection within the same address space.", "Physical clock drift.", "Vector clock causality."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Which register is specifically named as part of the processor context?",
  options: ["Status register.", "Program counter.", "Accumulator.", "Index register."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Parallelism is exploited by scheduling threads on:",
  options: [
    "A single core only.",
    "Different address spaces.",
    "A multiprocessor or multicore processor.",
    "Different virtual machines only."
  ],
  answer: 2,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "A software processor 'in whose context one or more threads may be executed' is a:",
  options: ["Vector clock.", "Process.", "Node.", "Vserver."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Thread context switching is faster than process context switching because:",
  options: [
    "It involves the MMU.",
    "It is done independent of the OS.",
    "It requires trapping to the kernel.",
    "It uses physical clock offsets."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Which of the following is a benefit of multithreading mentioned in the source?",
  options: [
    "Increased physical clock accuracy.",
    "Avoiding expensive process switching.",
    "Eliminating the need for MMUs.",
    "Providing a separate address space for every thread."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "The stack pointer is a value stored in:",
  options: ["The network interface.", "The registers of a processor.", "The local disk.", "The UTC broadcast."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "'Minimal collection of values stored in registers and memory' for a thread is:",
  options: ["Processor context.", "Thread context.", "Process context.", "Application context."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "If a thread is executing, it is executing a series of:",
  options: ["Processes.", "Instructions.", "Address spaces.", "MMU values."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Why are threads more prone to errors?",
  options: ["They use different address spaces.", "They use the same address space.", "They have no contexts.", "They do not use physical processors."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "What must the OS do to switch between two processes?",
  options: ["Nothing, it is automatic.", "Trap to the kernel.", "Increase the clock drift rate.", "Use a vector clock."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Which context is necessary for a thread to execute but does NOT include MMU register values?",
  options: ["Process context.", "Thread context.", "Network context.", "Global context."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "In the source, virtualization 'builds virtual processors in software, on top of':",
  options: ["Virtual machines.", "Physical processors.", "Application interfaces.", "Logic gates."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "The values in addressing registers are part of the:",
  options: ["Data-centric model.", "Processor context.", "Out-of-band communication.", "TLP formula."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Which of the following is SHARED by threads in the same process?",
  options: ["Thread context.", "Program counter.", "Address space.", "Processor context."],
  answer: 2,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "A process is a software processor that provides context for:",
  options: ["Only one thread.", "Zero threads.", "One or more threads.", "Hardware instructions only."],
  answer: 2,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "'Trapping to the kernel' is associated with:",
  options: ["Thread switching.", "Process switching.", "Clock synchronization.", "Sequential consistency."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Which is NOT a reason to use threads according to the text?",
  options: ["Avoid needless blocking.", "Exploit parallelism.", "Increase physical clock drift.", "Avoid process switching."],
  answer: 2,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "The program counter is a component of:",
  options: ["Only the operating system.", "Processor context.", "Only the MMU.", "The transport layer."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "A multithreaded process allows for scheduling on a multiprocessor to:",
  options: ["Minimize the address space.", "Exploit parallelism.", "Avoid using physical clocks.", "Increase the number of leap seconds."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Thread context includes processor context AND:",
  options: ["MMU settings.", "State.", "Vserver ID.", "DNS resolver."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Which of these is considered 'minimal' in software?",
  options: ["Process.", "Processor.", "Thread.", "Cloud."],
  answer: 2,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "If a thread switches context 'independent of the operating system,' it is because:",
  options: [
    "It is a kernel thread.",
    "It shares the same address space.",
    "It has no context.",
    "It is a physical processor."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Processor context values are stored in:",
  options: ["The main memory only.", "The registers of a processor.", "The local disk.", "The cloud."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Which of the following is associated with the expense of process creation?",
  options: ["Sharing memory.", "Trapping to the kernel.", "Using vector clocks.", "Minimizing the critical path."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Multiple threads in a process share a context that includes:",
  options: ["Different MMU register values.", "Different address spaces.", "MMU register values.", "No registers at all."],
  answer: 2,
  chapter: 3,
  chapterTitle: "Processes"
},

/* --- CHAPTER 4: COMMUNICATION (CONTEXT SWITCHING DYNAMICS) --- */

{
  type: "mcq",
  question: "Which of these provides 'access transparency'?",
  options: ["Physical clocks.", "Client-side stubs for RPCs.", "The MMU.", "Cesium clocks."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "What constitutes the 'direct costs' of a context switch?",
  options: [
    "Messing up the cache.",
    "Reorganizing the TLB.",
    "The actual switch and executing code of the handler.",
    "Invalidating page tables."
  ],
  answer: 2,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "What is the primary cause of 'indirect costs' during a context switch?",
  options: ["Saving the stack pointer.", "Messing up the cache.", "Incrementing the logical clock.", "Sending an RPC call."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "In the process switching diagram, what does label 'S1' represent?",
  options: [
    "Switch context from process A to process B.",
    "Switch from kernel space to user space.",
    "Switch from user space to kernel space.",
    "A thread-level switch within Process A."
  ],
  answer: 2,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "In the process switching diagram, which label represents the actual movement of control from Process A to Process B?",
  options: ["S1.", "S2.", "S3.", "S4."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "Transition 'S3' in the context switch diagram denotes:",
  options: ["Entry into the operating system.", "Switch from kernel space to user space.", "Clearing the MMU values.", "Saving the processor context."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "According to the cache reorganization diagram, what is the state of the cache 'before the context switch' (a)?",
  options: [
    "It contains blocks A, B, C, and D in order from MRU to LRU.",
    "It is empty.",
    "It contains only block D.",
    "It has been reorganized by a handler."
  ],
  answer: 0,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "What happens to the cache immediately 'after the context switch' (b)?",
  options: [
    "All data is lost.",
    "Block D is removed or moved, and a new empty slot (Ø) appears at the MRU position.",
    "The order remains exactly A, B, C, D.",
    "The system reboots."
  ],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "In the cache reorganization diagram, what happens 'after accessing block D' (c)?",
  options: [
    "Block D becomes the Most Recently Used (MRU) block.",
    "Block D is deleted.",
    "The cache is cleared.",
    "Block A is removed."
  ],
  answer: 0,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "Why does context switching lead to 'indirect costs' related to the cache?",
  options: [
    "The registers are physically too far from the cache.",
    "The cache must be reorganized because the new process/thread uses different memory blocks.",
    "The cache is physically powered down.",
    "The logical clock resets the cache."
  ],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "In the Python multiprocessing example, if 'eve' goes to sleep for 14 seconds at 40:23, what time does she wake up?",
  options: ["40:27.", "40:37.", "40:23.", "40:50."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "In the Python trace, why does 'bob' wake up at 40:27 when he went to sleep at the same time as 'eve'?",
  options: ["He is a higher priority process.", "He slept for only 4 seconds.", "He did not sleep at all.", "The OS clock drifted."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "In the second Python example (threading and global variables), what is the purpose of the global shared_x statement?",
  options: [
    "To create a new local variable for each thread.",
    "To allow threads within the process to access and modify the same variable.",
    "To share the variable across different physical machines.",
    "To delete the variable."
  ],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "In the second Python trace, 'eve' and 'bob' see different initial values of shared_x (71 and 84). Why?",
  options: [
    "The variable is synchronized across processes.",
    "Processes have separate address spaces, so they each have their own copy of shared_x.",
    "The random number generator is faulty.",
    "Threads do not share memory."
  ],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "In the Python trace, 'eve 2' wakes up and sees shared_x is 72. Then 'eve 1' wakes up and sees it is 73. This shows:",
  options: [
    "Threads within the 'eve' process share the same variable.",
    "The 'bob' process is also incrementing 'eve's' variable.",
    "Each thread has a private copy of the global variable.",
    "The variable is being overwritten by the operating system."
  ],
  answer: 0,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "According to the trace, when 'bob' finishes, what is his final value of shared_x?",
  options: ["74.", "87.", "71.", "99."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "Which of the following is a 'direct cost' of a clock-interrupt handler?",
  options: ["Pipeline stalls.", "Executing the code of the handler.", "Cache misses for data.", "TLB misses."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "Why is thread context switching faster than process context switching?",
  options: [
    "It doesn't involve trapping to the kernel (it's independent of the OS).",
    "It clears the cache.",
    "It uses fewer physical cores.",
    "It uses logical clocks instead of physical ones."
  ],
  answer: 0,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "The 'messing up the cache' refers to which concept?",
  options: ["Direct context switch cost.", "Indirect context switch cost.", "Precision synchronization.", "Mutual exclusion."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "In the context switch diagram, S2 occurs within which space?",
  options: ["User space.", "Operating system (Kernel space).", "External network.", "Instruction Set Architecture."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "What is the relationship between the MRU and LRU labels in the cache diagram?",
  options: [
    "MRU is at the bottom, LRU is at the top.",
    "MRU is at the top, LRU is at the bottom.",
    "They are both at the same position.",
    "MRU stands for Minimal Register Unit."
  ],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "If a clock interrupt occurs, what is the first direct cost?",
  options: ["Reorganizing the cache.", "Saving the processor context.", "Executing the code of the handler.", "Swapping the address space."],
  answer: 2,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "In the cache diagram (b), what does the gray block with the Ø symbol represent?",
  options: [
    "The Most Recently Used data.",
    "A reorganization or empty/new state introduced by the switch.",
    "The MMU register.",
    "The program counter."
  ],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "Why does 'eve 0' in the Python trace wake up seeing shared_x as 74?",
  options: [
    "She was the first thread to wake up.",
    "Threads 2 and 1 already woke up and incremented the shared variable from 71 to 72 and 73.",
    "Bob changed the variable.",
    "It was a random value."
  ],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "In the Python example, p = Process(target=sleeper, args=('eve',)) creates:",
  options: ["A new thread.", "A new process with its own address space.", "A new hardware processor.", "A network socket."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "If a system has zero indirect context switch costs, it means:",
  options: [
    "The cache is never affected by a context switch.",
    "The OS doesn't use a kernel.",
    "The process has no threads.",
    "The physical clock is perfect."
  ],
  answer: 0,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "In the process switching diagram, what must happen before S2 can occur?",
  options: ["S3.", "S1 (Switch from user to kernel space).", "The process must terminate.", "A leap second must be added."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "In the cache reorganization diagram, after accessing D (c), block B is:",
  options: [
    "Now at the MRU position.",
    "Shifted down to the LRU position.",
    "Removed from the cache.",
    "At the same position it was in (a)."
  ],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "A 'trap to the kernel' is specifically required for:",
  options: ["S1 and S3 transitions.", "Only the S2 transition.", "Pure user-space thread switching.", "Calculating TLP."],
  answer: 0,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "Which Python module is used to demonstrate thread-level sharing of a global variable?",
  options: ["multiprocessing.", "threading.", "time.", "random."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "If a context switch occurs and the cache is not messed up, the indirect cost is:",
  options: ["High.", "Minimal/Zero.", "Equivalent to the direct cost.", "Infinite."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "The 'actual switch' part of direct costs involves:",
  options: [
    "Changing the physical CPU core.",
    "Saving and restoring the register values (processor context).",
    "Invaliding the entire RAM.",
    "Updating the UTC satellite time."
  ],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "In the Python trace, the line 'eve sees shared x being 74' appears:",
  options: [
    "Before any threads start.",
    "After all 'eve' threads have finished and joined.",
    "While bob's threads are sleeping.",
    "At the start of the program."
  ],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "Transition S2 in the diagram specifically changes which context?",
  options: ["User space context.", "Process A context to Process B context.", "Hardware instruction set.", "Physical clock precision."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "Why do 'eve 0', 'eve 1', and 'eve 2' all affect the same shared_x?",
  options: [
    "They are part of the same process.",
    "They are kernel-level threads.",
    "They have separate MMUs.",
    "They use TCP Urgent data."
  ],
  answer: 0,
  chapter: 4,
  chapterTitle: "Communication"
},
/* ================= CONTINUED INTEGRATED QUESTIONS (Q95 - Q193) ================= */

/* --- CHAPTER 3: PROCESSES & VIRTUALIZATION (CONTD.) --- */

{
  type: "mcq",
  question: "In the cache diagram (c), the Ø block is still present. This indicates:",
  options: [
    "The cache is now perfectly optimized.",
    "The reorganization caused by the switch still occupies a slot.",
    "A hardware failure.",
    "The program counter is at zero."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "If Process A is 'trapped' to the kernel (S1), it cannot return to user space until:",
  options: ["S2 and S3 occur.", "It becomes Process B.", "The system is rebooted.", "S1 is reversed."],
  answer: 0,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "The stack pointer and program counter are specifically saved during which switch?",
  options: ["Thread context switch.", "Process context switch.", "Both.", "Neither."],
  answer: 2,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "'Messing up the cache' is an observation about:",
  options: [
    "Software bugs.",
    "Hardware-software interaction during context switching.",
    "Network latency.",
    "Logical clock drifts."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "What is the main issue regarding thread implementation according to the source?",
  options: [
    "Whether threads should use physical or logical clocks.",
    "Should an OS kernel provide threads, or should they be implemented as user-level packages?",
    "Should threads share the same address space?",
    "Should threads use the MMU?"
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Which is a benefit of the user-space thread solution?",
  options: [
    "The kernel can distinguish threads easily.",
    "Implementations can be extremely efficient because all operations are handled within a single process.",
    "Blocking system calls do not affect the process.",
    "Signaling events to individual threads is supported by the kernel."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "What happens in a user-space solution if a thread makes a blocking system call?",
  options: [
    "Only that thread blocks.",
    "The entire process will be blocked by the kernel.",
    "The kernel switches to another thread in that process.",
    "The thread is deleted."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "In user-space solutions, what is the difficulty regarding 'external events'?",
  options: [
    "User-space threads cannot block.",
    "The kernel cannot distinguish threads, so it cannot support signaling events to them.",
    "External events always crash the process.",
    "Threads do not have contexts for events."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "What defines the 'Kernel solution' for threads?",
  options: [
    "The kernel has no knowledge of threads.",
    "The kernel contains the implementation of a thread package, and operations return as system calls.",
    "Threads are implemented entirely in a library atop the OS.",
    "Threads do not require any trapping to the kernel."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "In a kernel thread solution, what happens when a thread performs a blocking operation?",
  options: [
    "The process crashes.",
    "The kernel schedules another available thread within the same process.",
    "The hardware stops executing instructions.",
    "All threads in the process block."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "How does a kernel-level solution handle external events?",
  options: [
    "It cannot handle them.",
    "The kernel schedules the thread associated with the event because it catches all events.",
    "It ignores the events.",
    "It traps to user space to find a thread."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "What was a historical disadvantage of kernel-level threads?",
  options: [
    "They could not handle blocking calls.",
    "Loss of efficiency because each thread operation requires a trap to the kernel.",
    "They did not share an address space.",
    "They were only for physical processors."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "What is the 'Two-level' threading approach?",
  options: [
    "Combining physical and logical clocks.",
    "Mixing user-level and kernel-level threads such that kernel threads can execute user-level threads.",
    "Using two separate operating systems.",
    "Using two MMUs for one process."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "In the hybrid model, if a user thread makes a system call, what is the effect on the kernel thread?",
  options: ["It terminates.", "It blocks, and the user thread remains bound to it.", "It switches to another process.", "It ignores the call."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "In the hybrid model, what can the kernel do while one kernel thread is blocked?",
  options: ["Schedule another kernel thread having a runnable user thread bound to it.", "Only wait for the first thread to unblock.", "Delete the process.", "Reset the physical clock."],
  answer: 0,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Can a user thread switch to another user thread within the same kernel thread in the hybrid model?",
  options: [
    "No, never.",
    "Yes, if the kernel thread has a runnable user thread bound to it, it can switch in user space.",
    "Only if the kernel allows it via a system call.",
    "Only during a leap second."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "In the hybrid model, what happens if a user thread calls a 'blocking user-level operation'?",
  options: ["The kernel thread blocks.", "A context switch is done to a runnable user thread bound to the SAME kernel thread.", "The entire process blocks.", "The instruction set architecture changes."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "When does a kernel thread in the hybrid model potentially get destroyed?",
  options: ["Whenever it blocks.", "When there are no user threads left to schedule.", "After every system call.", "When it traps to the kernel."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Why hasn't the 'Two-level' model generally outweighed other solutions?",
  options: [
    "It is too efficient.",
    "Increased complexity has not turned out to generally outweigh the performance gain.",
    "It doesn't support multithreading.",
    "It only works on single-core processors."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "In the user and kernel threads combined diagram, the dashed line between spaces represents:",
  options: ["A physical wire.", "The binding of a user thread to a kernel thread.", "A network connection.", "A memory leak."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "In the diagram, how many kernel threads are 'executing a user thread'?",
  options: ["Three.", "Two.", "One.", "Four."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "In the diagram, what is the status of the third kernel thread?",
  options: ["It is executing a user thread.", "it is idle/empty.", "It is blocked.", "It is in user space."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "The 'blocking problem' specifically refers to:",
  options: [
    "Physical clock drift.",
    "A single thread blocking an entire process in a user-level package.",
    "Too many threads in one kernel.",
    "The MMU stopping instruction execution."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Efficient implementations are a hallmark of:",
  options: ["Kernel-level threads.", "User-space threads.", "Vector clocks.", "Iterative servers."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Every thread operation requires a trap to the kernel in which model?",
  options: ["Pure user-space.", "Kernel solution.", "Single-threaded process.", "TLP model."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Scheduler activations are used to solve:",
  options: ["The blocking problem and event signaling in user-space threads.", "Physical clock accuracy.", "Sequential consistency violations.", "DNS resolution."],
  answer: 0,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "A user thread bound to a kernel thread that makes a system call is:",
  options: [
    "'Permanently' blocked until the process dies.",
    "'Remain bound' to that blocked kernel thread.",
    "Immediately unbound and moved to another core.",
    "Deleted by the MMU."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "The transition between 'User space' and 'Kernel space' in the threading diagram is:",
  options: ["Transparent to the programmer.", "Represented by a horizontal line.", "A hardware-only gate.", "Only for processes, not threads."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Thread state in the hybrid model is stored in:",
  options: ["Only the kernel.", "Both User space and Kernel space (as shown in the diagram).", "Only the hardware registers.", "The cloud."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "If there are 100 user threads and only 1 kernel thread, what is the maximum number of threads that can execute on a multicore system simultaneously?",
  options: ["100.", "1.", "0.", "2."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Handling signals is 'simple' in which model?",
  options: ["User-level packages.", "Kernel solution.", "Stateless servers.", "Logical clocks."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Which model is 'more prone to errors' due to lack of memory protection?",
  options: ["Kernel threads.", "User-space threads.", "Both.", "Neither."],
  answer: 2,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "A user-level thread package is implemented as:",
  options: ["Part of the OS kernel.", "A library within a single process.", "A hardware upgrade.", "A set of privileged instructions."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "System calls are required for thread operations in:",
  options: ["Pure user-space solutions.", "Kernel solutions.", "Finite-state machines.", "TLP calculations."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "In the hybrid model, 'binding' refers to:",
  options: [
    "A permanent hardware link.",
    "The association between a user thread and a kernel thread.",
    "A type of network encryption.",
    "A software bug."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "If a user thread blocks on a 'user-level operation' (like a mutex), the kernel:",
  options: [
    "Blocks the whole process.",
    "Is unaware, and the process can switch to another user thread within the same kernel thread.",
    "Destroys the kernel thread.",
    "Adds a leap second."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Trapping to the kernel for every thread operation is:",
  options: ["Very fast.", "A loss of efficiency.", "Only for iterative servers.", "Required for logical clocks."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "A runnable user thread can switch to ANY other runnable user thread in user space when:",
  options: [
    "The kernel thread is idle.",
    "The kernel schedules another kernel thread with a runnable user thread bound to it.",
    "The system is iterative.",
    "A write-write conflict occurs."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "The primary trade-off of the two-level model is:",
  options: ["Efficiency vs. Complexity.", "Speed vs. Accuracy.", "Reliability vs. Parallelism.", "I/O vs. CPU."],
  answer: 0,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "A kernel thread that has no bound user threads is effectively:",
  options: ["Blocked.", "Idle.", "A dispatcher.", "A zombie."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "'Extremely efficient' implementation is possible in:",
  options: ["Kernel solution.", "User-space solution.", "Out-of-band communication.", "TCP handoff."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "'The kernel can’t distinguish threads' is a critique of:",
  options: ["The hybrid model.", "User-space solutions.", "Kernel solutions.", "PlanetLab."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "In the hybrid diagram, 'User space' contains:",
  options: ["Kernel threads.", "User threads and thread state.", "Physical registers.", "TCP sockets."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "A 'system call' always involves:",
  options: ["User space only.", "A trap to the kernel.", "Only physical clocks.", "A vector clock update."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "If a user thread remains bound to a blocked kernel thread:",
  options: ["It can still execute instructions.", "It is effectively blocked as well.", "It moves to another kernel thread automatically.", "It becomes a process."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "The 'blocking problem' is solved by:",
  options: ["Using single-threaded processes.", "Implementation of threads in the kernel.", "Disabling interrupts.", "Using UTC satellite signals."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Efficiency of user-space threads is due to:",
  options: ["Hardware support.", "Avoiding the trap to the kernel for operations.", "Sharing the MMU.", "Using dispatcher threads."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "A kernel thread 'may even be removed' if:",
  options: ["It makes a system call.", "It remains idle with no user threads to schedule.", "It blocks on I/O.", "It receives an urgent message."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "'All services provided by the kernel are done on behalf of the process' describes:",
  options: ["Kernel-level threads.", "User-space threads.", "IaaS.", "SaaS."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "In the two-level model, if a user thread blocks on a user-level mutex:",
  options: ["The kernel thread blocks.", "The user thread switches to another user thread in user space.", "The process terminates.", "The instruction set changes."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Which of these is a 'trap to the kernel'?",
  options: ["A library call (API).", "A system call.", "A logical clock increment.", "A TLP calculation."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "The primary advantage of kernel threads over user threads is:",
  options: ["Efficiency.", "Reliability.", "Better handling of blocking calls and events.", "They don't have contexts."],
  answer: 2,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Complexity is the main drawback of:",
  options: ["User-level threads.", "The two-level hybrid model.", "Single-threaded servers.", "The MMU."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "In the kernel threading diagram, squares with solid lines inside kernel space represent:",
  options: ["User threads.", "Kernel threads.", "Physical processors.", "Memory blocks."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "A user thread is 'bound' to a kernel thread when:",
  options: ["It is created.", "It is being executed.", "It is blocked.", "It is in a queue."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Which interface level is used for 'Library calls'?",
  options: ["ISA.", "System calls.", "API.", "TCP."],
  answer: 2,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "In user-space threading, thread operations like 'yield' are:",
  options: ["System calls.", "Library calls handled in user space.", "Hardware interrupts.", "Privileged instructions."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "If the kernel schedules a kernel thread, what can that thread execute?",
  options: ["Only kernel code.", "A runnable user thread bound to it.", "Any process.", "A physical clock update."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Signaling events to individual threads is supported by:",
  options: ["Pure user-space solutions.", "Kernel solutions.", "Both.", "Neither."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Trapping to the kernel refers to transition:",
  options: ["S3.", "S1.", "S2.", "Ø."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "A thread that executes 'in the context of that thread' means:",
  options: ["It has its own address space.", "It uses saved register values and state.", "it uses its own MMU.", "It has its own operating system."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Which model provides 'parallelism and blocking system calls'?",
  options: ["Multithreading.", "Single-threaded process.", "Finite-state machine.", "Iterative server."],
  answer: 0,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "Which model provides 'parallelism and nonblocking system calls'?",
  options: ["Multithreading.", "Single-threaded process.", "Finite-state machine.", "Iterative server."],
  answer: 2,
  chapter: 3,
  chapterTitle: "Processes"
},
{
  type: "mcq",
  question: "A 'single-threaded process' is characterized by:",
  options: ["Parallelism.", "No parallelism and blocking system calls.", "Nonblocking system calls.", "Trapping to user space."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},

/* --- CHAPTER 4: COMMUNICATION (CLIENT PERFORMANCE) --- */

{
  type: "mcq",
  question: "Which cost is harder to predict/quantify?",
  options: ["Direct cost.", "Indirect cost.", "TLP.", "UTC time."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "In the Python trace, the first 'bob' thread to wake up is:",
  options: ["bob 2.", "bob 1.", "bob 0.", "eve 0."],
  answer: 2,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "How does a multithreaded web browser 'hide network latency'?",
  options: [
    "By increasing physical clock speed.",
    "By fetching multiple files using separate threads that each perform a blocking HTTP request.",
    "By using non-blocking system calls only.",
    "By avoiding the kernel entirely."
  ],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "If a browser fetches three images simultaneously, what is the effect as files come in?",
  options: [
    "The browser waits until all are finished.",
    "The browser displays them as they come in.",
    "The browser crashes.",
    "The browser blocks the user interface."
  ],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "Doing several RPC calls to different servers using multiple threads can lead to:",
  options: ["Constant slowdown.", "A linear speed-up.", "Exponential complexity.", "Logical clock synchronization."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "In the TLP formula, what does c_i represent?",
  options: [
    "The cost of thread i.",
    "The fraction of time that exactly i threads are being executed simultaneously.",
    "The clock drift rate.",
    "The logical timestamp."
  ],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "What does c_0 represent in the TLP formula?",
  options: [
    "The time when the CPU is 100% busy.",
    "The fraction of time the system is idle (0 threads executing).",
    "The first thread in the system.",
    "The physical clock time."
  ],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "Scenario: A system spends 20% of its time idle (c_0 = 0.2), 30% of its time with 1 thread (c_1 = 0.3), and 50% with 2 threads (c_2 = 0.5). Calculate the TLP.",
  options: ["1.0.", "1.625.", "1.3.", "2.0."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "Scenario: A system is never idle (c_0 = 0). It spends 50% of time with 1 thread and 50% with 3 threads. What is the TLP?",
  options: ["1.5.", "2.0.", "3.0.", "1.0."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "According to the source, what is the typical TLP value for a Web browser?",
  options: ["1.0.", "1.5 to 2.5.", "5.0 to 10.0.", "0.5."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "If a browser has a TLP of 1.5 to 2.5, threads are primarily used for:",
  options: [
    "Maximum hardware utilization.",
    "Logically organizing browsers.",
    "Eliminating the OS.",
    "Syncing UTC time."
  ],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "If c_0 = 0.5 and the system only ever runs 1 thread (c_1 = 0.5), the TLP is:",
  options: ["0.5.", "1.0.", "2.0.", "0."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "What does 'T' represent in the TLP summation?",
  options: [
    "Total time.",
    "The maximum number of threads that can execute at the same time.",
    "The number of physical processors.",
    "The clock drift bound."
  ],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "Scenario: c_0=0.1, c_1=0.1, c_2=0.8. Calculate TLP.",
  options: ["1.7.", "1.88.", "2.0.", "1.0."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "A client multithreaded RPC call 'waits until all results have been returned.' This is an example of:",
  options: ["Non-blocking call.", "Blocking call.", "Vector clock increment.", "Causal consistency."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "Multithreaded clients help with performance mostly when:",
  options: ["Only one server is used.", "Calls are made to different servers (linear speed-up).", "The physical clock is accurate.", "The system is stateless."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "If c_0 increases, what happens to the TLP if the numerator remains constant?",
  options: ["TLP decreases.", "TLP increases.", "TLP remains same.", "TLP becomes zero."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "TLP measures parallelism at which level?",
  options: ["Instruction level.", "Thread level.", "Network level.", "Cloud level."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "Scenario: A browser spends 10% time idle, 10% with 1 thread, 10% with 2, 70% with 3. What is the TLP?",
  options: ["2.0.", "2.66.", "3.0.", "1.5."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "If TLP = 1.0, it implies the system is equivalent to:",
  options: [
    "A single-threaded process (when active).",
    "A perfectly parallel system.",
    "An idle system.",
    "A multicore processor."
  ],
  answer: 0,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "'Each one by a different thread' in RPC calls is used to:",
  options: ["Increase clock drift.", "Hide network latency.", "Enforce sequential consistency.", "Create vservers."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "Browser threads performing HTTP requests are described as:",
  options: ["Non-blocking.", "Blocking.", "Logic-less.", "Hardware-bound."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "If c_1=1.0 and c_0=0, the TLP is:",
  options: ["0.", "1.0.", "Infinite.", "0.5."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "A linear speed-up in RPC calls is possible if:",
  options: ["The network is slow.", "Calls are to different servers.", "All calls are to one server.", "The client is single-threaded."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "The TLP formula includes (1 - c_0) in the denominator to:",
  options: [
    "Account for physical clock drift.",
    "Normalize the value based on active time (excluding idle time).",
    "Include the OS kernel in the calculation.",
    "Minimize the critical path."
  ],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "Scenario: c_0=0.4, c_1=0.3, c_2=0.3. Calculate TLP.",
  options: ["0.9.", "1.5.", "1.0.", "2.0."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "Why do browsers display files 'as they come in'?",
  options: [
    "To save memory.",
    "To improve user-perceived performance by hiding network latency.",
    "To prevent thread switching.",
    "Because the kernel requires it."
  ],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "If c_i for all i > 1 is zero, the TLP is always:",
  options: ["0.", "1.0.", "c_1.", "1 - c_0."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "The 'Hiding network latencies' strategy is applied at the:",
  options: ["Server side only.", "Client side.", "Physical clock layer.", "Instruction set layer."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "Scenario: A system has 4 threads. c_0=0.1, c_4=0.9. TLP is:",
  options: ["4.0.", "3.6.", "4.44.", "1.0."],
  answer: 0,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "TLP for a standard browser (1.5 - 2.5) indicates that most of the time:",
  options: ["10 threads are running.", "Between 1 and 3 threads are typically active.", "The browser is idle.", "Only one thread is used."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "In RPC, a client thread 'waits.' What happens to the CPU?",
  options: [
    "It stops.",
    "The OS switches to another thread in that process.",
    "It increments the clock drift.",
    "It resets the MMU."
  ],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "TLP summation starts at i=1 because:",
  options: [
    "c_0 is the target.",
    "0 * c_0 = 0, so it adds nothing to the average thread count.",
    "Physical clocks start at 1.",
    "There is no thread 0."
  ],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "Scenario: c_0=0.5, c_1=0.2, c_2=0.1, c_3=0.2. TLP is:",
  options: ["1.0.", "2.0.", "1.5.", "0.5."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
{
  type: "mcq",
  question: "Multithreaded client performance 'Note' mentions a benefit of:",
  options: ["Access transparency.", "Linear speed-up.", "Leap seconds.", "Namespaces."],
  answer: 1,
  chapter: 4,
  chapterTitle: "Communication"
},
/* ================= MCQs (CONTINUED) ================= */

{
type: "mcq",
question: "The browser 'scans an incoming HTML page' to:",
options: [
"Check for viruses.",
"Find more files that need to be fetched.",
"Update the logical clock.",
"Reorganize the cache."
],
answer: 1,
chapter: 3,
chapterTitle: "Processes"
},

{
type: "mcq",
question: "In TLP, if T=5, how many c_i values are there including c_0?",
options: ["5", "6", "4", "1"],
answer: 1,
chapter: 3,
chapterTitle: "Processes"
},

{
type: "mcq",
question: "TLP is a metric used for:",
options: ["Accuracy", "Parallelism", "Reliability", "Migration transparency"],
answer: 1,
chapter: 3,
chapterTitle: "Processes"
},

{
type: "mcq",
question: "If a system is always idle (c_0 = 1.0), the TLP is:",
options: ["1.0", "0", "Undefined (division by zero)", "Infinite"],
answer: 2,
chapter: 3,
chapterTitle: "Processes"
},

{
type: "mcq",
question: "Logical organization of browsers is the primary use for threads when:",
options: [
"TLP is very high (e.g., 50)",
"TLP is relatively low (e.g., 1.5 - 2.5)",
"No threads are used",
"Physical clocks are drifting"
],
answer: 1,
chapter: 3,
chapterTitle: "Processes"
},

{
type: "mcq",
question: "An 'incoming HTML page' is processed by the:",
options: ["Server dispatcher", "Web browser (client)", "DNS resolver", "MMU"],
answer: 1,
chapter: 3,
chapterTitle: "Processes"
},

{
type: "mcq",
question: "c_2 = 0.4 means:",
options: [
"40% of the time, exactly 2 threads are executing.",
"2 threads cost 0.4 seconds.",
"40 threads are executing.",
"The clock drift is 0.4."
],
answer: 0,
chapter: 3,
chapterTitle: "Processes"
},

{
type: "mcq",
question: "What is the 'basic model' of a server?",
options: [
"A process that initiates requests to clients.",
"A process implementing a service, waiting for incoming requests, and handling them.",
"A physical CPU core.",
"A set of library calls."
],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "What defines an 'Iterative server'?",
options: [
"It handles multiple requests at once.",
"It handles a request completely before attending to the next request.",
"It uses a dispatcher.",
"It only uses user-space threads."
],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "A 'Concurrent server' is characterized by:",
options: [
"Handling only one request per hour.",
"Using a dispatcher to pass incoming requests to separate threads or processes.",
"Never blocking.",
"Having no address space."
],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "Which server model is considered 'the norm'?",
options: ["Iterative", "Concurrent", "Physical", "Logical"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "Why are concurrent servers preferred in the presence of blocking operations?",
options: [
"They use less power.",
"They can easily handle multiple requests while one is blocked (e.g., on disk I/O).",
"They don't use the OS.",
"They synchronize physical clocks."
],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "In the Dispatcher/Worker model, what is the role of the worker thread?",
options: [
"To pick up incoming network requests.",
"To handle the actual processing of the request dispatched to it.",
"To manage the physical registers.",
"To synchronize with the UTC satellite."
],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "Which server model has 'no parallelism' but uses 'blocking system calls'?",
options: ["Multithreading", "Single-threaded process", "Finite-state machine", "Iterative"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "Which model provides parallelism while using 'nonblocking system calls'?",
options: ["Multithreading", "Finite-state machine", "Single-threaded process", "RPC stubs"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "What is the common approach for request dispatching when locality is important?",
options: ["Using a physical clock", "Using DNS", "Using a vector clock", "Using a leap second"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "In the DNS-based dispatching approach, what information is part of the request to the DNS server?",
options: ["The worker thread ID", "The client's IP address", "The MMU register values", "The TLP value"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "What is a 'stateless server'?",
options: [
"A server that is currently powered off.",
"A server that never keeps accurate information about client status after handling a request.",
"A server with no address space.",
"A server that only uses physical clocks."
],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "Which of the following is an action a stateless server would NOT perform?",
options: [
"Closing a file after access.",
"Keeping a record of which files are open for a specific client.",
"Handling a request.",
"Responding to a client."
],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "A 'stateful server' is characterized by:",
options: [
"Having no status information.",
"Keeping track of the status of its clients (e.g., record of opened files).",
"Being iterative only.",
"Not having a network connection."
],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "What is a consequence of the stateless design regarding crashes?",
options: [
"Inconsistencies are increased.",
"State inconsistencies due to client or server crashes are reduced.",
"The server can never reboot.",
"The client must be deleted."
],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "What is a potential drawback of stateless servers?",
options: [
"They are too fast.",
"Possible loss of performance because the server cannot anticipate client behavior.",
"They require more memory.",
"They cannot be concurrent."
],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "Stateful servers are preferred when:",
options: [
"Reliability is the only concern.",
"Extremely high performance is required and clients keep local copies of shared data.",
"The server needs to be as simple as possible.",
"No network is available."
],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "'Out-of-band communication' is used to solve what issue?",
options: [
"How to fetch HTML files.",
"Is it possible to interrupt a server once it has accepted a service request?",
"How to calculate TLP.",
"How to define a Vserver."
],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "Which is a valid solution for out-of-band communication mentioned in the text?",
options: ["Use a separate port for urgent data.", "Use a physical clock.", "Use a vector clock.", "Only use iterative servers."],
answer: 0,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "What does TCP allow for out-of-band communication?",
options: ["A separate physical cable.", "Urgent messages in the same connection.", "Deleting the address space.", "Namespaces."],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "To use a separate port for urgent data, what must the OS support?",
options: ["Cesium clocks.", "Priority-based scheduling.", "TLP calculation.", "SaaS."],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "What is an 'Activation policy' in object servers?",
options: [
"A security protocol.",
"The actions to take when an invocation request comes in.",
"A physical hardware switch.",
"A DNS lookup."
],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "Which component implements a specific activation policy?",
options: ["Object skeleton", "Object adapter", "Request demultiplexer", "DNS resolver"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "In the Ice runtime example, what does adapter.activate() do?",
options: [
"Deletes all objects.",
"Starts the server's ability to handle requests for the objects in that adapter.",
"Updates the physical clock.",
"Switches to user-level threads."
],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "In the Ice client example, stringToProxy is used to:",
options: [
"Create a new physical server.",
"Obtain a proxy for a specific object at a specific endpoint.",
"Synchronize clocks.",
"Fetch HTML."
],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "What is the default port for HTTP (WWW) mentioned in the text?",
options: ["20", "21", "80", "25"],
answer: 2,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "Which port is used for FTP 'Control'?",
options: ["20", "21", "23", "25"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "Port 25 is used for:",
options: ["Telnet", "SMTP (Simple Mail Transfer)", "DNS", "TLP"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "In the 'Contacting a server' diagram, what is the role of the 'Daemon'?",
options: ["To perform the actual service.", "To manage the end-point table and assign ports.", "To trap to the kernel.", "To act as a client."],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "What is 'TCP handoff'?",
options: ["A way to delete a connection.", "A solution for spreading requests to appropriate servers in a cluster.", "A clock synchronization method.", "A physical context switch."],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "In object servers, the 'Request demultiplexer' passes requests to:",
options: ["The local OS directly", "The appropriate Object adapter", "The physical processor", "A UTC satellite"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "Does connection-oriented communication (like TCP) fit into a stateless design?",
options: [
"No, it's impossible.",
"Yes, the server just doesn't store client-specific application state after the request.",
"Only if it's iterative.",
"Only if physical clocks are used."
],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "Stateless servers are more 'reliable' in the sense that:",
options: [
"They never crash.",
"A crash doesn't lead to complex state recovery because no client status was stored.",
"They use physical processors.",
"They are always iterative."
],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "Which server type uses a 'Super-server'?",
options: ["Stateful only", "Stateless only", "One that creates specific servers and hands off requests", "DNS servers"],
answer: 2,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "Port 20 is for:",
options: ["Telnet", "FTP Data", "SMTP", "HTTP"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "The Ice runtime is used as an example of:",
options: ["A physical clock", "A server/client object system", "A DNS resolver", "A Vserver"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "The 'Object's stub (skeleton)' is part of:",
options: ["The client only", "The server (above the object adapter)", "The hardware", "The DNS server"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "A 'finite-state machine' server uses:",
options: ["Parallelism and nonblocking system calls", "No parallelism", "User-level threads only", "Physical clocks only"],
answer: 0,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "In Ice, SimplePrinter1 is an:",
options: ["Adapter", "Identity", "IP address", "Physical printer"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "Spreading servers across the Internet can be simplified by:",
options: [
"Using a single cloud provider's data centers.",
"Using only iterative servers.",
"Disabling DNS.",
"Using logical clocks."
],
answer: 0,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "'Register end point' in the contacting-a-server diagram is done by the:",
options: ["Client", "Server", "Daemon", "MMU"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "Which server type can 'anticipate client behavior'?",
options: ["Stateless", "Stateful", "Iterative only", "Single-threaded"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "'Urgent message comes in => associated request is put on hold' describes:",
options: ["DNS resolution", "Out-of-band communication Solution 1", "Sequential consistency", "TLP calculation"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "The Ice checkedCast function is used by:",
options: [
"The server to check types.",
"The client to convert a proxy to a specific interface (PrinterPrx).",
"The DNS server.",
"The physical processor."
],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "'Parallelism and blocking system calls' is the characteristic of:",
options: ["Multithreading servers", "Single-threaded processes", "Finite-state machines", "DNS resolvers"],
answer: 0,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "The 'End-point table' is used to:",
options: ["Save processor context", "Store mapping of services to ports/end-points", "Calculate clock drift", "Enforce causality"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "Multithreaded programs are often 'smaller and easier to understand' because of:",
options: ["Namespaces", "Simplified flow of control using blocking calls", "Use of SaaS", "Vector clocks"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "In Ice, 'default -p 11000' refers to:",
options: ["The clock speed", "The protocol (default) and port number (11000)", "The TLP value", "The MMU register"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "A server that 'waits for an incoming request' is part of the:",
options: ["DNS system only", "Basic server model", "Physical processor context", "Vector clock protocol"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "Which solution for out-of-band communication requires 'OS signaling techniques'?",
options: ["Separate ports", "Solution 2 (TCP urgent messages)", "DNS", "Namespaces"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "If 'locality is important,' the DNS returns the address of:",
options: ["The fastest server", "The most local server", "The master server", "The iterative server"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "An 'Object adapter' is responsible for:",
options: ["Managing the physical hardware", "Implementing a specific activation policy for objects", "Encrypting data", "Deleting processes"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "'Client transparency' in DNS resolution means:",
options: [
"The client knows every server IP.",
"Letting the DNS resolver act on behalf of the client to keep the client unaware of distribution.",
"Using logical clocks.",
"Not using any servers."
],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "A 'Super-server' is useful for:",
options: ["Reducing the number of active idle servers by creating them on demand", "Synchronizing UTC", "Calculating TLP", "Deleting Vservers"],
answer: 0,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "In the 'Object servers' diagram, where does the request enter the system?",
options: ["At the Object stub", "At the Local OS", "At the DNS", "At the Cloud"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "Which port is 23?",
options: ["FTP", "Telnet", "SMTP", "HTTP"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "Stateful servers 'allow clients to keep local copies of shared data' to:",
options: ["Increase clock drift", "Achieve extremely high performance", "Reduce memory", "Avoid using the OS"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "A 'single-threaded server' prohibits:",
options: ["Blocking calls", "Simple scale-up to a multiprocessor system", "DNS resolution", "Logical clocks"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "In the Ice server code, SimplePrinter1 and SimplePrinter2 are:",
options: ["Two different physical printers", "Two different object instances", "DNS names", "Thread IDs"],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "Out-of-band communication Solution 1 requires:",
options: [
"The server to have a separate thread/process for urgent messages.",
"Disabling all threads.",
"A perfect physical clock.",
"Only one port."
],
answer: 0,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "DNS resolvers can be a problem because:",
options: ["They are too fast.", "They may not be local to the actual client.", "They don't use TCP.", "They ignore the IP address."],
answer: 1,
chapter: 3,
chapterTitle: "Servers"
},

{
type: "mcq",
question: "Why is virtualization important?",
options: ["Hardware changes faster than software.", "Software changes faster than hardware.", "It increases physical clock drift.", "It eliminates the need for instructions."],
answer: 0,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "Which is NOT a reason for virtualization?",
options: ["Ease of portability and code migration.", "Isolation of failing or attacked components.", "To reduce the number of cesium clocks.", "Hardware changes faster than software."],
answer: 2,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "What is the 'Principle' of virtualization?",
options: ["Deleting instructions", "Mimicking interfaces", "Increasing latency", "Sharing registers"],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "How many types of interfaces are there at how many different levels?",
options: ["Two types at one level", "Four types at three levels", "Ten types at ten levels", "One type at four levels"],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "The 'Instruction Set Architecture' (ISA) consists of which two subsets?",
options: ["Hard and Soft instructions", "Privileged and General instructions", "Physical and Logical instructions", "Local and Cloud instructions"],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "What defines a 'Privileged instruction'?",
options: [
"It can be executed by any program.",
"If executed in user mode, it causes a trap to the operating system.",
"It only works in the cloud.",
"It clears the cache."
],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "System calls are offered by:",
options: ["Libraries", "An operating system", "The hardware", "DNS servers"],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "Library calls are known as:",
options: ["ISA", "API (Application Programming Interface)", "MMU", "RPC"],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "Which virtualization type involves an 'interpreter/emulator running atop an OS'?",
options: ["Minimal OS", "Process virtualization", "Application virtualization", "SaaS"],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "Minimal OS virtualization is characterized by:",
options: [
"Deleting all operating systems.",
"Low-level instructions along with a bare-bones minimal operating system.",
"Using only SaaS.",
"Having no MMU."
],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "Application virtualization is characterized by:",
options: ["Delegating most work to a full-fledged OS", "Bypassing the OS completely", "Running on physical transistors", "Using cesium 133"],
answer: 0,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "In the 'Zooming into VMs' diagram, the 'Virtual machine monitor' (VMM) sits between:",
options: ["Hardware and Host OS", "Host OS and Guest OS", "User space and Kernel space", "API and Libraries"],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "In a container, 'Namespaces' provide:",
options: ["Resource restrictions", "A collection of processes with their own view of identifiers", "Layered file systems", "Physical clock accuracy"],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "A 'Union file system' in containers allows:",
options: [
"Combining physical hard drives.",
"Combining several file systems in a layered fashion.",
"Shared address space between processes.",
"Priority-based scheduling."
],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "'Control groups' are used to:",
options: ["Change the names of processes", "Impose resource restrictions upon a collection of processes", "Update logical clocks", "Create DNS proxies"],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "What is 'PlanetLab'?",
options: [
"A single large server.",
"A collaborative environment where different organizations share machines for experiments.",
"A type of physical clock.",
"A specific browser."
],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "In PlanetLab, what is a 'Vserver'?",
options: [
"A physical machine.",
"An independent and protected environment with its own libraries and server versions.",
"A single thread.",
"A DNS name."
],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "What is a 'Slice' in PlanetLab?",
options: ["A single processor", "A collection of vservers distributed across multiple machines assigned to an application", "A 1-second interval", "A part of a file"],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "In the PlanetLab organization diagram, Vservers run atop a:",
options: ["Windows system", "Linux enhanced operating system", "Hardware directly", "SaaS tier"],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "Two processes in different Vservers with the same user ID:",
options: ["Are the same user", "Does not imply the same user", "Will crash the system", "Share the same address space"],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "Which cloud service tier covers 'basic infrastructure' like VMs?",
options: ["IaaS (Infrastructure-as-a-Service)", "PaaS (Platform-as-a-Service)", "SaaS (Software-as-a-Service)", "DaaS"],
answer: 0,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "PaaS covers:",
options: ["Basic physical machines", "System-level services", "Final user applications like Gmail", "Instruction sets"],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "SaaS contains:",
options: ["VMs", "Actual applications", "Only system calls", "VMMs"],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "IaaS provides 'almost complete isolation' between customers, but which isolation might NOT be reached?",
options: ["Memory isolation", "Performance isolation", "Address space isolation", "Register isolation"],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "The 'VMM' in the virtualization diagram stands for:",
options: ["Vector Memory Monitor", "Virtual Machine Monitor", "Virtual MMU", "Version Management Monitor"],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "In the 'Refining the organization' section, nonprivileged instructions are:",
options: ["All instructions except privileged ones", "Instructions that cause a trap", "Cloud-only instructions", "Vector clock updates"],
answer: 0,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "A 'container' is shown in the diagram to consist of:",
options: ["Only a host OS", "Layered specific images atop a base image", "A single hardware processor", "Only names"],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "The 'highest layer' of a Union file system is the only one that:",
options: ["Allows for read operations", "Allows for write operations", "Is shared by all containers", "Is physical"],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "PlanetLab's Linux enhancements include proper adjustment of:",
options: ["The physical clock", "Process IDs (e.g., init having ID 0)", "Network latency", "TLP formula"],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "Virtualization is used in PlanetLab to ensure:",
options: ["Clocks are synced to UTC", "Different distributed applications do not get into each other’s way", "TLP is exactly 2.5", "Only SaaS is used"],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "In the VM organization diagram, the 'Guest operating system' sits atop the:",
options: ["Hardware", "Virtual machine monitor", "Physical processor", "Internet"],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "Which cloud service is 'renting out a VM'?",
options: ["IaaS", "PaaS", "SaaS", "DaaS"],
answer: 0,
chapter: 3,
chapterTitle: "Virtualization"
},

{
type: "mcq",
question: "Separation of Vservers leads to:",
options: ["Processes", "Slices", "DNS queries", "MMUs"],
answer: 1,
chapter: 3,
chapterTitle: "Virtualization"
},
/* ================= MCQs (CONTINUED) ================= */

{
  type: "mcq",
  question: "'Identifiers' view in a container is provided by:",
  options: ["Namespaces", "Control groups", "Union FS", "VMM"],
  answer: 0,
  chapter: 3,
  chapterTitle: "Processes"
},

{
  type: "mcq",
  question: "A container 'Tool' used for resource restriction is:",
  options: ["Control groups", "Namespaces", "Union filesystems", "Root filesystem"],
  answer: 0,
  chapter: 3,
  chapterTitle: "Processes"
},

{
  type: "mcq",
  question: "In PlanetLab, what is 'chroot' conceptually compared to?",
  options: ["Physical context switch", "The environment of a Vserver", "A leap second", "A vector clock"],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},

{
  type: "mcq",
  question: "The Google Chromebook is an example of:",
  options: [
    "A physical processor.",
    "A seamless user interface via a Web browser for cloud applications.",
    "An iterative server.",
    "A VMM."
  ],
  answer: 1,
  chapter: 2,
  chapterTitle: "Architectures"
},

{
  type: "mcq",
  question: "Which cloud model contains 'actual applications'?",
  options: ["IaaS", "PaaS", "SaaS", "ISA"],
  answer: 2,
  chapter: 2,
  chapterTitle: "Architectures"
},

{
  type: "mcq",
  question: "ISA stands for:",
  options: [
    "Internal System Architecture",
    "Instruction Set Architecture",
    "International Software Association",
    "Instruction Synchronous Address"
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},

{
  type: "mcq",
  question: "If a program executes a 'General instruction' in user mode:",
  options: ["It causes a trap.", "It executes normally.", "The system crashes.", "It syncs with UTC."],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},

{
  type: "mcq",
  question: "The 'base image' in the container diagram is:",
  options: ["PHP 7.4", "Redis 5.07", "Ubuntu 20.04", "The root filesystem"],
  answer: 2,
  chapter: 3,
  chapterTitle: "Processes"
},

{
  type: "mcq",
  question: "Virtualization principle 'mimicking interfaces' involves:",
  options: [
    "Hardware System A mimicking Interface B.",
    "Hardware/software system B mimicking Interface A.",
    "Deleting Interface A.",
    "Using physical clocks."
  ],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},

{
  type: "mcq",
  question: "Process virtualization (a) runs atop:",
  options: ["Hardware directly", "An Operating System", "A VMM", "A cloud provider"],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},

{
  type: "mcq",
  question: "Application/Libraries sit at which level in all virtualization diagrams?",
  options: ["The bottom", "The top", "Inside the hardware", "In the DNS server"],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},

{
  type: "mcq",
  question: "'Isolation of failing or attacked components' is a benefit of:",
  options: ["Physical clocks", "Virtualization", "Sequential consistency", "RPC stubs"],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},

{
  type: "mcq",
  question: "Which container tool provides 'layered' filesystems?",
  options: ["Namespaces", "Union file systems", "Control groups", "Host OS"],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},

{
  type: "mcq",
  question: "Cloud 'Platform-as-a-Service' covers:",
  options: ["Physical machines", "System-level services", "End-user apps", "Physical clock drift"],
  answer: 1,
  chapter: 2,
  chapterTitle: "Architectures"
},

{
  type: "mcq",
  question: "A slice in PlanetLab belongs to:",
  options: ["A single machine", "A distributed application", "A single process ID", "A cesium clock"],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},

{
  type: "mcq",
  question: "Which instruction is 'allowed to be executed only by the operating system'?",
  options: ["General instruction", "Privileged instruction", "API call", "TLP formula"],
  answer: 1,
  chapter: 3,
  chapterTitle: "Processes"
},

{
  type: "mcq",
  question: "'Host operating system' in the refining diagram sits atop the:",
  options: ["Guest OS", "VMM", "Hardware", "Libraries"],
  answer: 2,
  chapter: 3,
  chapterTitle: "Processes"
},

{
  type: "mcq",
  question: "UTC is based on the transitions of which atom?",
  options: ["Hydrogen", "Cesium 133", "Carbon 14", "Uranium 238"],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "How is UTC broadcast?",
  options: ["Only through landline cables", "Short-wave radio and satellite", "Only via DNS", "Only through physical registers"],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "Satellites provide an accuracy of about:",
  options: ["±1 second", "±0.5 ms", "±10 ms", "±0.1 ns"],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "'Precision' (π) is the goal to keep the deviation between two clocks on:",
  options: [
    "One machine over time.",
    "Any two machines within a specified bound.",
    "The machine and the satellite.",
    "P1 and P2 only."
  ],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "'Accuracy' (α) aims to keep the clock bound to:",
  options: ["Another machine's clock", "UTC time t", "The TLP value", "A vector clock"],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "'Internal synchronization' means keeping clocks:",
  options: ["Accurate", "Precise", "At zero", "In user space"],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "'External synchronization' means keeping clocks:",
  options: ["Precise", "Accurate", "Fast", "Slow"],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "A clock drift rate is denoted by:",
  options: ["π", "ρ", "α", "θ"],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "If a hardware clock has frequency F(t) and ideal frequency F, its drift rate must satisfy:",
  options: ["F(t) = F", "1-ρ ≤ F(t)/F ≤ 1+ρ", "F(t) = ρ", "F(t) > F"],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "We couple a software clock to a hardware clock using:",
  options: ["DNS", "Hardware interrupts", "Vector clocks", "MMUs"],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "If dC/dt > 1, the clock is:",
  options: ["Perfect", "Fast", "Slow", "Accurate"],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "If dC/dt = 1, the clock is:",
  options: ["Fast", "Perfect", "Slow", "Precise"],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "If dC/dt < 1, the clock is:",
  options: ["Perfect", "Fast", "Slow", "Accurate"],
  answer: 2,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "In NTP, T_1 is the timestamp when:",
  options: [
    "The server receives the request.",
    "The client sends the request.",
    "The server sends the response.",
    "The client receives the response."
  ],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "In NTP, T_2 is the timestamp when:",
  options: ["Client sends.", "Server receives the request.", "Server sends response.", "Client receives response."],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "In NTP, T_3 is the timestamp when:",
  options: ["Server receives.", "Server sends the response.", "Client receives.", "Request is prepared."],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "In NTP, T_4 is the timestamp when:",
  options: ["Client sends.", "Client receives the response.", "Server sends.", "MMU is updated."],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "The formula for NTP offset θ is:",
  options: [
    "(T_2 - T_1)",
    "((T_2 - T_1) + (T_3 - T_4)) / 2",
    "(T_4 - T_1)",
    "ρ · t"
  ],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "The formula for NTP delay δ is:",
  options: [
    "((T_4 - T_1) - (T_3 - T_2)) / 2",
    "(T_2 - T_1)",
    "π + α",
    "ρ^2"
  ],
  answer: 0,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "NTP collects (θ, δ) pairs and chooses the θ for which associated delay δ was:",
  options: ["Maximal", "Minimal", "Zero", "Infinite"],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "What is 'RBS'?",
  options: ["Remote Block Storage", "Reference Broadcast Synchronization", "Register Bound System", "Reliable Broadcast Service"],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "RBS minimizes the 'critical path' by avoiding which parts of the usual path?",
  options: [
    "Network propagation time.",
    "Message preparation and Time spent in NIC at the sender side.",
    "Receiving time at the receiver.",
    "Physical clock transitions."
  ],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "In RBS, receiving nodes record:",
  options: [
    "The server's time.",
    "The time Tp,m they received m from their own local clock.",
    "The TLP value.",
    "The drift rate ρ."
  ],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "RBS uses what to capture drift?",
  options: ["Simple averaging", "Linear regression", "MMU values", "Vector clocks"],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "Why do we need leap seconds?",
  options: ["Atoms are getting faster.", "Days are getting longer.", "To adjust for logical clock drift.", "To compensate for namespacing."],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "What is the 'Happened-before' relation symbol?",
  options: ["a = b", "a → b", "a · b", "a + b"],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "What type of ordering does the happened-before relation introduce?",
  options: ["Total ordering", "Partial ordering", "No ordering", "Random ordering"],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "Lamport's Logical Clocks P1: if a → b in the same process, then:",
  options: ["C(a) = C(b)", "C(a) < C(b)", "C(a) > C(b)", "C(a) = C(b) + 1"],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "Upon receiving message m with ts(m), process Pj adjusts its local counter Cj to:",
  options: [
    "ts(m)",
    "max{Cj, ts(m)} + 1",
    "Cj + 1",
    "min{Cj, ts(m)}"
  ],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "How are 'ties' broken if two events have the same logical timestamp?",
  options: ["They are ignored.", "By using process IDs.", "By adding a leap second.", "By using physical clocks."],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "Where are logical clock adjustments typically implemented?",
  options: ["Network layer", "Middleware layer", "Application layer", "Physical hardware"],
  answer: 1,
  chapter: 1,
  chapterTitle: "Introduction"
},

{
  type: "mcq",
  question: "What is a major limitation of Lamport's clocks?",
  options: [
    "They are too slow.",
    "C(a) < C(b) does not guarantee that a causally preceded b.",
    "They require cesium clocks.",
    "They only work on single processes."
  ],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "Which clock type captures causality?",
  options: ["Lamport clock", "Vector clock", "Physical clock", "Hardware clock"],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "Mutual exclusion using logical clocks is about agreeing in which order processes:",
  options: [
    "Synchronize clocks.",
    "Are allowed to enter a critical region.",
    "Send RPC calls.",
    "Use namespacing."
  ],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "When a process leaves the critical region in Ricart-Agrawala, it sends which message?",
  options: ["ENTER", "RELEASE", "ACK", "TLP"],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "Totally Ordered Multicast ensures:",
  options: [
    "One replica is always wrong.",
    "All concurrent updates are seen in the same order everywhere.",
    "Clocks are synced to UTC.",
    "No updates are allowed."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "If process Pj with counter 5 receives message m with ts(m)=15, its new counter is:",
  options: ["5", "15", "16", "6"],
  answer: 2,
  chapter: 5,
  chapterTitle: "Coordination"
},
/* ================= MCQs (CONTINUED) ================= */

{
  type: "mcq",
  question: "In the mutual exclusion code, the queue stores:",
  options: ["Only process IDs.", "(timestamp, processID, type) tuples.", "MMU values.", "DNS records."],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "Rule 3 'executes step 1 before passing m to the application' means:",
  options: [
    "The receive event itself gets a timestamp.",
    "The application gets the message at time 0.",
    "The sender is blocked.",
    "The physical clock is accurate."
  ],
  answer: 0,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "Logical clocks are 'Partial' because:",
  options: [
    "They only show half the time.",
    "Not every pair of events in a system is necessarily ordered.",
    "They are only for one process.",
    "They use only general instructions."
  ],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "If C(a) < C(b), vector clocks can tell us:",
  options: [
    "If a causally preceded b or if they are concurrent.",
    "Only if they are physical events.",
    "The TLP value.",
    "The physical clock delay."
  ],
  answer: 0,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "A logical clock increment is a:",
  options: [
    "Privileged instruction.",
    "Software-level adjustment in the counter.",
    "Hardware interrupt.",
    "Leap second."
  ],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
},

{
  type: "mcq",
  question: "Why replicate in distributed systems?",
  options: [
    "To increase reliability and performance.",
    "To reduce complexity and memory.",
    "To use more physical clocks.",
    "To avoid namespacing."
  ],
  answer: 0,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "What is the 'problem' with replication?",
  options: [
    "Too much memory is used.",
    "Replicas need to be kept consistent.",
    "Physical clocks drift too fast.",
    "DNA resolution is slow."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "Consistency models are a 'contract' between:",
  options: [
    "Hardware and Software.",
    "A data store and processes.",
    "Client and Server only.",
    "Physical and Logical clocks."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "A 'Read-write conflict' occurs when:",
  options: [
    "Two reads happen at once.",
    "A read and a write operation act concurrently.",
    "Two physical clocks are different.",
    "A Vserver crashes."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "A 'Write-write conflict' occurs when:",
  options: [
    "Two concurrent write operations occur.",
    "One process writes and another reads.",
    "The TLP is zero.",
    "The physical clock is accurate."
  ],
  answer: 0,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "Which is a solution to the 'costly operation' of guaranteeing global ordering?",
  options: [
    "Use only physical clocks.",
    "Weaken consistency requirements.",
    "Use more hardware.",
    "Use iterative servers."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "In the notation Wi(x)a, what does it mean?",
  options: [
    "Process i reads a from x.",
    "Process i writes value a to variable x.",
    "Variable x is deleted by i.",
    "The clock is a."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "Sequential consistency requires that all processes see the operations of each individual process in:",
  options: [
    "Random order.",
    "The order specified by its program.",
    "Physical UTC order.",
    "Reverse order."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "Sequential consistency requires that the result of any execution is the same as if all operations were executed in:",
  options: [
    "Parallel.",
    "Some sequential order.",
    "Only one process.",
    "Physical order."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "In a sequentially consistent store, if P1 writes a and then P2 writes b, do all processes have to see a before b?",
  options: [
    "Yes, always.",
    "No, only if they are sequentially ordered in the execution.",
    "Only if UTC time is used.",
    "Only if it's a stateful server."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "In a 'Sequentially consistent data store' diagram, if P3 and P4 both read 'b then a', is this consistent?",
  options: [
    "Yes, because they agree on the sequence.",
    "No, because 'a' was written first by P1.",
    "Only if they used a global clock.",
    "No, it violates serializability."
  ],
  answer: 0,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "If P3 sees b then a, but P4 sees a then b, why is this NOT sequentially consistent?",
  options: [
    "They do not agree on a single sequential order.",
    "P3 is wrong.",
    "Physical time was violated.",
    "The MMU failed."
  ],
  answer: 0,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "Linearizability is stronger than sequential consistency because it requires operations to take effect:",
  options: [
    "Eventually.",
    "Instantaneously at some moment between start and completion.",
    "Only at the end.",
    "Only on one core."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "'Causal consistency' requires that writes that are 'potentially causally related' must be seen by:",
  options: [
    "Only the sender.",
    "All processes in the same order.",
    "Only some processes.",
    "Zero processes."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "In Causal Consistency, 'concurrent writes':",
  options: [
    "Must be seen in the same order.",
    "May be seen in a different order by different processes.",
    "Are forbidden.",
    "Use physical clocks."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "If P1 writes a, then P2 reads a and writes b, are W(a) and W(b) causally related?",
  options: [
    "No.",
    "Yes, because P2's write may have depended on P1's write.",
    "Only if they are the same value.",
    "Only in the cloud."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "'Entry consistency' uses which mechanism to group operations?",
  options: ["Physical clocks.", "Locks (Acquire/Release).", "DNS.", "Vservers."],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "In Entry consistency, 'no data access is allowed' until:",
  options: [
    "The physical clock reaches UTC.",
    "All previous accesses to associated locks have been performed.",
    "The TLP is 2.5.",
    "The process terminates."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "In Entry consistency, accesses to locks themselves are:",
  options: ["Not ordered.", "Sequentially consistent.", "Physical events.", "Accurate."],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "'Eventual consistency' is defined as consistency being reached when:",
  options: [
    "Physical clocks are synced.",
    "In lack of updates, all replicas eventually have the same data.",
    "Every process stops.",
    "The cloud provider reboots."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "A problem is 'monotonic' if for any input sets S ⊆ T:",
  options: ["P(S) = P(T).", "P(S) ⊆ P(T).", "P(S) is zero.", "Physical clocks are used."],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "'Serializability' in transactions means the final result matches:",
  options: [
    "A parallel execution.",
    "A serial execution of those transactions.",
    "A random execution.",
    "No execution."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "The notation Ri(x)b means:",
  options: [
    "Process i writes b to x.",
    "Process i reads value b from variable x.",
    "Variable x is deleted.",
    "The clock is b."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "Concurrent writes can be seen in different orders in which model?",
  options: [
    "Sequential consistency.",
    "Causal consistency.",
    "Linearizability.",
    "Strong consistency."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "'Instantaneous effect' is the key term for:",
  options: [
    "Causal consistency.",
    "Linearizability.",
    "Entry consistency.",
    "Eventual consistency."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "In Entry consistency, L(x) stands for:",
  options: ["Logical x.", "Lock x (Acquire).", "LRU x.", "Low x."],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "Replication 'Performance' benefit is achieved by:",
  options: [
    "Spreading requests to keep load balanced.",
    "Using only one copy.",
    "Increasing physical clock accuracy.",
    "Disabling DNS."
  ],
  answer: 0,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "'Serializability' keyword is associated with:",
  options: ["Clocks.", "Transactions.", "Vservers.", "Containers."],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "Linearizability is associated with 'shaded areas' in diagrams to represent:",
  options: [
    "Cloud regions.",
    "The interval between the start and completion of operations.",
    "MMU ranges.",
    "Physical clock precision π."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "'Sequential order' in the definition of sequential consistency is:",
  options: [
    "A single physical time.",
    "Some (any) valid interleaved order that is seen the same by everyone.",
    "Always the order of process IDs.",
    "Always alphabetical."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},
/* ================= MCQs (CONTINUED) ================= */

{
  type: "mcq",
  question: "P_1 writes x=a. P_2 writes x=b. If there are no reads in between:",
  options: [
    "They are causally related.",
    "They are concurrent writes.",
    "They are physical writes.",
    "Accuracy is lost."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "Which model is defined by 'each operation should appear to take effect instantaneously'?",
  options: [
    "Sequential consistency.",
    "Linearizability.",
    "Entry consistency.",
    "ISA."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "In the linearizability diagram, the 'better results' are those where:",
  options: [
    "No shaded areas overlap.",
    "Operations are ordered such that they match the time shaded regions.",
    "Physical clocks are slow.",
    "The TLP is zero."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "Signature '11 11 11' means:",
  options: [
    "Everyone printed 0.",
    "Everyone printed 1 for every variable.",
    "The system crashed.",
    "No printing occurred."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "Eventual consistency handles 'lack of updates' by:",
  options: [
    "Propagating updates until replicas match.",
    "Discarding all data.",
    "Switching to iterative servers.",
    "Namespacing."
  ],
  answer: 0,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "In Entry consistency, why is the effect of operations 'not immediately known'?",
  options: [
    "The network is too slow.",
    "The model allows updates to be batched/deferred until a release/acquire occurs.",
    "The physical clock is accurate.",
    "DNS is used."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "Monotonic problems are useful because:",
  options: [
    "They are always fast.",
    "They naturally handle incomplete or eventually consistent data without rollback.",
    "They use physical clocks.",
    "They are stateful."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "Sequential consistency is a contract that process Pi will see writes in:",
  options: [
    "Its own program order and some common order for all other writes.",
    "Reverse order.",
    "UTC order only.",
    "Zero time."
  ],
  answer: 0,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "Conflicting operations (read-write, write-write) must be:",
  options: [
    "Ignored.",
    "Ordered (synchronization).",
    "Deleted.",
    "Accurate."
  ],
  answer: 1,
  chapter: 7,
  chapterTitle: "Consistency and Replication"
},

{
  type: "mcq",
  question: "The 'linear regression' in RBS is used to:",
  options: [
    "Find the TLP.",
    "Capture clock drift over time.",
    "Sync UTC satellite time.",
    "Define a slice."
  ],
  answer: 1,
  chapter: 5,
  chapterTitle: "Coordination"
}
];