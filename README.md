# Job_search_application
  
SOFTWARE 
REQUIREMENTS SPECIFICATION 
 
 
For 
 
 
JOB SEARCH APPLICATION 
 
 
Prepared by:- 
Vigneshkumar D
Aswin Kumar K
Hem Kumar V
Krishna Kumar R
Rajarajan K
 
 
 




Academic Year: 2020 - 2024 
 
1. Introduction 
1.1 Purpose  
 The way people engage with potential companies and investigate employment prospects has been completely transformed by job search applications. These digital platforms, which benefit both employers and job seekers, have a clear and multifaceted function and have grown to be indispensable instruments in the contemporary job search process. Their main goal is to make the job search process more efficient and straightforward by providing a variety of tools and services that make networking, job discovery, application management, and information access easier. We explore the fundamental goals of job search apps in this introduction, emphasizing how they are transforming the labour market and improving the effectiveness and accessibility of the process for all parties.
1.2 Document Conventions 
	Entire document should be justified. 
	Convention for Main title 
Font face: Times New Roman 
Font style: Bold 
Font Size: 14 
	Convention for Sub title 
Font face: Times New Roman 
Font style: Bold 
Font Size: 12 
	Convention for body 
Font face: Times New Roman 
Font Size: 12 
 
1.3 Scope of Development Project 
A development project's scope is a comprehensive and essential document that acts as the project's overall structure. It summarizes the parameters, goals, deliverables, and essential tasks that specify the aim of the project and lay the groundwork for its effective completion. The particular elements that comprise a project's scope are many and cover a range of crucial facets.

Project objectives must, first and foremost, be precisely stated within the scope. These objectives are usually organized in accordance with the SMART criteria, which guarantees that they are Specific, Measurable, Achievable, Relevant, and Time-bound. They also specify the particular goals that the project hopes to achieve, the issues or needs it seeks to solve. They provide the project a distinct feeling of purpose and direction. 
1.4 Definitions, Acronyms and Abbreviations 
PMO: Project Management Office
ROI: Return on Investment
QA: Quality Assurance
RFP: Request for Proposal
SLA: Service Level Agreement
KPI: Key Performance Indicator
WBS: Work Breakdown Structure
CBA: Cost-Benefit Analysis
PMBOK: Project Management Body of Knowledge 
1.5 References 
[1] “Overview of Spring Framework”
http://docs.spring.io/spring/docs/current/spring-framework-reference/html/index.html[Sep.10, 2016] 
[2] “Hibernate Getting Started Guide” 
https://www.answertopia.com/android-studio/android-architecture-overview/[Sep 15, 2016]
[3] “Hibernate-Architecture” 
http://www.tutorialspoint.com/hibernate/hibernate_architecture.htm [Sep. 30, 2016]
[4] “An Overview of the Android Architecture” http://www.techotopia.com/index.php/An_Overview_of_the_Android_Architecture [Oct. 10, 2016]
2. Overall Descriptions 
2.1 Product Perspective 
 	                Use case diagram of job search application
                              

                
This is a board level diagram of the project showing a basic overview. Finding jobs that best suit the interests and skill set is quite a challenging task for the job seekers. The difficulties arise from not having proper knowledge on the organization’s objective, work culture and current job openings. In addition, finding the right candidate with desired qualifications to fill their current job openings is an important task for the recruiters of any organization.
 
2.2 Product Function 
 	                 Entity Relationship Diagram of job search application   
                                                             

              In the ER diagram for the job search application, users can be either job seekers or employers, with various connections among them. Job postings, created by employers, are categorized by industry, location, and required skills. Job seekers submit applications for specific postings and can upload their resumes, associating them with their profiles. Companies post job vacancies and are linked to job postings, while specific skills are required for each job posting.
 
2.3 User Classes and Characteristics 
         The job search application provides different types of services based on the type of users [Job Seeker/Employer]. Employers, acting as controllers, have administrator privileges, while job seekers can be either individuals seeking employment opportunities or professionals looking for job listings. This setup allows for distinct user roles and functionalities within the job search application, with employers having administrative authority and job seekers being the primary users.
The features that are available to the Employers are:-
	Employers can create and publish job.                                           
	Create and post job listings.
	Communicate with applicants directly through the ATS.
	Access a database of user-submitted resumes.
	Communicate with applicants via messaging or email.
	Customize the company profile to attract potential candidates
	Employers can access reports on posted jobs.
                The Features available to Job Seekers are:- 
	Search for job listings based on criteria.
	Upload and store multiple versions of resumes or CVs.
	Create a comprehensive user profile
	Set up job alerts to receive notifications.
	Organize applications and correspondence in one place.
	Research potential employers to make informed decisions.
	Manage privacy settings and control.
	Access salary data and compensation.
	Provide feedback on the job search application itself.
2.4 Operating Environment 
           A job search application is a complex ecosystem comprising various technical and user-oriented components. On the technical side, it encompasses server infrastructure and hosting solutions, including hardware, operating systems, and web technologies. Robust database management and security measures safeguard sensitive user data. Scalability and load balancing mechanisms ensure the application can handle varying levels of user traffic, while content delivery networks enhance the delivery of static assets. Compliance with accessibility standards, continuous monitoring, and adherence to regulatory requirements are essential for a secure and inclusive user experience. Moreover, third-party integrations, mobile compatibility, and data storage strategies are critical for delivering a seamless service.
2.5 Assumptions and Dependencies 
The assumptions are:-
	Users are actively seeking employment opportunities and are interested in using the application to find jobs. 
	Job listings and company information provided by employers are accurate and up-to-date.
	Users expect their personal information and job applications to be handled securely and with respect for privacy.
	Employers and recruiters use the application to find suitable candidates for job openings.
	The job market experiences fluctuations, and new job listings are regularly posted.
	Users have access to a stable internet connection to use the application.
	User feedback is valuable for improving the application's features and usability.
	Users prefer intuitive and easy-to-navigate interfaces that simplify the job search process.

The dependencies are:-

	External sources of job listings, including company websites, job boards, and API feeds.
	Third-party authentication services like OAuth, Google Sign-In, or social media logins.
	Relational database management systems (e.g., MySQL, PostgreSQL) to store user data, job listings, and application-related information.
	CDNs for efficient delivery of static assets (e.g., images, stylesheets, scripts) to users.
	Geolocation APIs or services for location-based job searches and recommendations.
	Payment gateway services (e.g., PayPal, Stripe) for processing payments related to premium job listings or subscription services.
 
2.6 Requirement 
Software specifications:
Development Environment: Describe the programming languages, frameworks, and integrated development environment (IDE) or code editor that are required for coding and development.
Database and Servers: List the web server software, database management system, version control, and deployment tools needed for web applications and data storage.
Testing and Documentation: Determine the frameworks, instruments, and dependencies for testing, documentation, and quality control that support cooperative project management and quality assurance.

Hardware specifications:
Computer Resources: To ensure peak performance when coding and testing, mention the CPU, RAM, and storage parameters for development computers.
Hardware for Mobile and Servers: If relevant, list the components required for the creation of mobile apps, the deployment of servers, and any requirements for network connectivity or auxiliary devices.
Security and Redundancy: Describe the peripheral devices, backup, and redundancy hardware. 

2.7 Data Requirement 
        In order to guarantee that a development project has access to the information and resources it needs, data requirements are essential. These specifications may take many forms based on the type of project. Priority one should be given to identifying the data sources that the project will employ, including databases, external APIs, and user-generated material, as well as the format and organization of the data. Furthermore, it's crucial to decide how frequently data updates are made; certain projects need real-time data, while others may get by with sporadic updates. 
3. External Interface Requirement 
3.1 GUI 
External interface requirements for a job search application typically refer to the interactions and interfaces that users, employers, and other stakeholders have with the application. These requirements are crucial for ensuring the usability, functionality, and user satisfaction of the application. Here are some key external interface requirements for a job search application:

User Interface (UI):
•	The UI should be clean, intuitive, and user-friendly, allowing users to easily navigate and interact with the application.
•	It should have a responsive design to ensure a consistent and pleasant experience across various devices (desktop, mobile, tablet).

Search and Filtering:

•	Users should be able to perform advanced job searches using various criteria like location, industry, job type, salary range, and keywords.
•	Filtering options should be available to refine search results quickly.

Job Listings:

•	Job listings should display essential information such as job title, company name, location, and posting date.
•	Users should be able to click on a job listing to view detailed information about the job.

User Profiles:

•	Registered users should have the ability to create and edit their profiles, including uploading a resume, adding a profile picture, and providing relevant information.
•	User profiles should also include a history of their job applications and saved job listings.

Job Application Process:

•	The application should provide a straightforward and seamless process for users to apply for jobs, including the option to upload a resume and cover letter.
•	Users should receive confirmation emails after submitting applications.

Saved Jobs and Alerts:

•	Users should have the option to save interesting job listings and receive email alerts or notifications when new jobs matching their criteria are posted.

Employer Profiles:

•	Employers should be able to create and manage their profiles, including company information, logo, and job postings.
•	Employers should have the ability to review and manage job applications submitted to their postings.

User Reviews and Ratings:

•	Allow users to leave reviews and ratings for companies and job listings to provide valuable insights to other users.


Communication Features:

•	Incorporate messaging or contact forms to facilitate communication between job seekers and employers.
•	Include privacy settings to protect user information.


Integration with Social Media:

•	Provide options for users to share job listings or their profiles on social media platforms.
Allow users to sign in or register using social media accounts for convenience.

Accessibility and Inclusivity:

•	Ensure that the application is accessible to users with disabilities by following accessibility guidelines (e.g., WCAG).
•	Implement language localization options for international users.

Security and Privacy:

•	Implement robust security measures to protect user data and prevent unauthorized access.
•	Clearly communicate the application's privacy policy and obtain user consent for data collection and usage.

Feedback and Support:

•	Include feedback forms or contact options for users to report issues, suggest improvements, or seek assistance from customer support.

Analytics and Tracking:

•	Implement analytics tools to track user behavior, monitor application performance, and gather insights for continuous improvement.

Documentation and Help Center:

•	Provide comprehensive documentation and a help center with FAQs to assist users in using the application effectively.
•	These external interface requirements are essential for creating a successful and user-centric job search application that meets the needs of both job seekers and employers. They contribute to a positive user experience and the overall success of the platform.

4. System Features 
The fundamental components of a program or system that specify what it should be able to accomplish in order to satisfy its goals and user needs are called system features. User interface and experience (UI/UX), non-functional characteristics, and functional capabilities are all included in these features. The primary functions of the system—user interactions, data processing, and reporting—are delineated in the functional characteristics. In order to create a system that is clear and easy to use, user interface and experience elements prioritize accessibility, design, and layout. Non-functional characteristics include things like performance, security, and maintenance, which specify how the system should work, safeguard data, and be supported continuously. When combined, these characteristics offer a road map for system design and development, enabling the final result to be tailored to user requirements and project goals. 
5. Other Non-functional Requirements 
5.1 Performance Requirement 
Non-functional requirements are essential aspects of a development project that dictate how the system should perform, rather than what it should do. These encompass performance, security, scalability, usability, and maintainability. Performance requirements define response times and system efficiency, ensuring smooth and responsive user experiences. Security requirements focus on safeguarding data and access control, specifying authentication and encryption measures. Scalability requirements address the system's ability to handle growing loads and adapt to changes in user numbers. Usability requirements emphasize an intuitive and accessible user interface. Maintainability requirements encompass updates, backups, and troubleshooting, ensuring long-term sustainability. These non-functional requirements are integral to shaping a system's overall quality and functionality. 
5.2 Safety Requirement 
The database may get crashed at any certain time due to virus or operating system failure. Therefore, it is required to take the database backup so that the database is not lost. Proper UPS/inverter facility should be there in case of power supply failure. 
 
5.3 Security Requirement 
	System will use secured database 
	Normal users can just read information but they cannot edit or modify anything except their personal and some other information. 
	System will have different types of users and every user has access constraints 
	Proper user authentication should be provided  No one should be able to hack users’ password 
	There should be separate accounts for admin and members such that no member can access the database and only admin has the rights to update the database. 
 
5.4 Requirement attributes 
	There may be multiple admins creating the project, all of them will have the right to create changes to the system. But the members or other users cannot do changes 
	The project should be open source 
	The Quality of the database is maintained in such a way so that it can be very user friendly to all the users of the database 
	The user be able to easily download and install the system 
 
5.5 Business Rules 
A business rule is anything that captures and implements business policies and practices. A rule can enforce business policy, make a decision, or infer new data from existing data.This includes the rules and regulations that the System users should abide by. This includes the cost of the project and the discount offers provided. The users should avoid illegal rules and protocols. Neither admin nor member should cross the rules and regulations. 
 
5.6 User Requirement 
User Requirement: Easy Access that is Secure
Users of the mobile banking app need easy access to their accounts that is safe. This means:
User authentication: Using a password, PIN, or biometric authentication (facial recognition or fingerprint), users must be able to safely access their accounts.
Two-Factor Authentication (2FA): To add an additional degree of security, the application should have an optional 2FA feature.
User-Friendly Interface: Account balances, transaction histories, fund transfers, bill payments, and other standard banking operations should all be easily accessible through an intuitive user interface.
Real-Time Alerts: Notifications about account balances, transactions, and security-related matters should be sent to users instantly.
Mobile Check Deposit: To streamline the deposit process, the app should enable users to deposit checks by snapping pictures of them.
Account Management: Users must have the ability to update contact information and establish preferences, among other things, and manage their account information.
 
6. Other Requirements 
6.1 Data and Category Requirement 
To properly structure and organize information, additional criteria for data and category administration are essential. The definition of data sources, formats, and access methods; the specification of data validation and quality checks; and the delineation of data backup and recovery protocols are all examples of data requirements. The criteria for categories cover the structure of categorization, including standards for taxonomy or metadata, user access controls for specific categories, and the upkeep and updating of categories. Furthermore, adherence to industry standards and data legislation is crucial. To secure sensitive information, it is essential to make sure encryption, data security, and privacy protections are in place. By enabling data accuracy and accessibility, these needs come together to form a strong and well-organized data and category management system. 
6.2 Appendix 
Appendix A: Data Sources Appendix B: Evaluation Metrics Appendix C: Search Algorithms Appendix D: User Feedback Appendix E: User Studies Appendix F: System Implementation Appendix G: References
6.3 Glossary 
Information retrieval (IR) is the process of employing queries or search phrases to find pertinent information in a big data repository, such as a database or search engine.
Query: A user's request to a database or search engine for data.
Ranking: The process of utilizing ranking algorithms to order search results according to relevance.
Ranking algorithm: The system of guidelines or procedures that establishes the sequence in which users are shown search results.
Precision: The proportion of pertinent documents found during a search to all papers found through a search.
Remember: The proportion of pertinent documents found in the database overall to those found during a search.
A statistic called Mean Average Precision (MAP) is used to assess how well information retrieval systems are performing.
F1-Score: A metric for evaluating overall performance that includes recall and precision 
6.4 Class Diagram 
A class is an abstract, user-defined description of a type of data. It identifies the attributes of the data and the operations that can be performed on instances (i.e. objects) of the data. A class of data has a name, a set of attributes that describes its characteristics, and a set of operations that can be performed on the objects of that class. The classes’ structure and their relationships to each other frozen in time represent the static model. In this project there are certain main classes which are related to other classes required for their working. There are different kinds of relationships between the classes as shown in the diagram like normal association, aggregation, and generalization. The relationships are depicted using a role name and multiplicities. Here ‘Librarian’, ‘Member’ and ‘Books’ are the most important classes which are related to other classes. 
 




				            
