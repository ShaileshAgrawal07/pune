1. Project Title
Medicine tracker

2. Created by
Tanishka Das
Shailesh Agrawal
Pulkit Ashra
Mayur Bhamre

3. Description
This website is a comprehensive platform developed to ensure the transparency, security, and efficiency of the drug supply chain. Built with HTML, CSS, and JavaScript for the front end, it provides an intuitive and user-friendly interface. The blockchain component, developed using Solidity and deployed on the Sepolia testnet, guarantees immutable and secure transactions, tracking drugs from the manufacturer to the consumer. Docker is used for containerization, ensuring scalability, portability, and easy deployment across different environments. Additionally, Truffle and Ganache UI have been utilized for blockchain development and testing. We also integrated an AI chatbot to enhance user interaction and support within the platform.

4. Features
- Secure tracking of drugs from manufacturing to delivery
- Tamper-proof records
- Real-time monitoring and verification
- Compliance with regulations
- Access controls for different stakeholders
- AI chatbot for user support

5. Technology Stack
- **Blockchain platform**: Ethereum, Geth (Testnet)
- **Smart contract languages**: Solidity
- **Frontend technologies**: React JS
- **Backend technologies**: Node.js
- **Metamask**: For Geth Testnet interaction (by adding the network manually)
- **Truffle**: For smart contract development and migration
- **Ganache UI**: For blockchain testing
- **AI chatbot**: For user assistance with multilanguage support

6. Installation Instructions
### Prerequisites
- Install [Truffle](https://archive.trufflesuite.com/docs/truffle/how-to/install/)
- Install [Ganache UI](https://youtu.be/4LOeclXIxXA?si=p7j7ZVITWPBFv651)
- Install [Metamask](https://youtu.be/c7-IsFNbBZE?si=AhPFUawtZvcldh6o)

### Additional Dependencies
- Install the correct Node.js version:
  - [Node.js v14 - v18](https://archive.trufflesuite.com/docs/truffle/how-to/install/#install-nodejs)
- Install Metamask Snap Box:
  - [Metamask Snap Box](https://archive.trufflesuite.com/boxes/metamask-snap-box/)

### Steps
1. Clone the project:
2. Navigate to the project directory.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure the blockchain network:
   - Install Ganache.
   - Install Metamask and create an account.
   - Connect Metamask to Ganache by importing accounts into Metamask.
   - Connect Ganache with the Truffle configuration file (`truffle-config.js`) by adding the port number and network ID.

5. Initialize the project with Metamask Snap Box:
   ```bash
   truffle unbox metamask/snap-box <dir_name>
   ```
6. Compile and migrate smart contracts:
   ```bash
   npx truffle compile
   npx truffle migrate
   ```
7. Navigate to the client directory:
   ```bash
   cd client
   ```
8. Install client dependencies:
   ```bash
   yarn
   npm install
   ```
9. Start the application:
   ```bash
   yarn start
   npm start
   ```

7. Usage
### Interacting with the Blockchain Network
- Access the Metamask wallet linked to the Geth Testnet to monitor transactions.
- Use the AI chatbot to guide you through the process.

### Managing Drug Supply Chain Records
- View and update drug records on the platform, which are securely stored and tracked on the blockchain.

### Verifying Transactions
- Verify the authenticity of transactions using the blockchain explorer linked with the Sepolia Testnet.

8. Smart Contracts
- **Description**: The smart contracts handle drug creation, tracking, and delivery verification.
- **Deployment**: Contracts are deployed on the Sepolia testnet using Truffle and Ganache UI.
- **Functions** include adding drugs to the supply chain, tracking their movement, and verifying delivery.

9. Contributing
- **Submit Issues**: Please open an issue via the GitHub repository.
- **Propose Changes**: Submit pull requests for review.
- **Code of Conduct**: Follow the project’s code of conduct, which is available in the repository.

10. License
Distributed under the MIT License.

11. Future Work
- Integrating AI-based analytics to predict supply chain delays.
- Expanding the platform for global drug tracking across multiple countries.
- Additional user roles for greater access control.

12. Development Process
- **Blockchain Setup**:
  - We used Ganache UI to simulate the Ethereum blockchain locally.
  - Contracts were written in Solidity and migrated using Truffle.
  - Interactions between the front end and blockchain were made possible with Web3.js.
- **AI Chatbot**:
  - An AI-powered chatbot is integrated for user support, assisting with navigating the platform and providing guidance on supply chain interactions.

14. Contribution
As an open-source project, feel free to fork, modify, and contribute to it.

15. Steps to Run the Project
1. Clone the project.
2. Follow the setup instructions provided above.
3. Enjoy your fully functional project!

