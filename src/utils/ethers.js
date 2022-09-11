import { ethers } from 'ethers'
import ContractABI from '../artifacts/Contract'

const { address, etherABI } = ContractABI;

export class EthersMethod {
    constructor(chainId, provider) {
        this.contract = new ethers.Contract(address[chainId], etherABI, provider.getSigner());
    }

    async getStudent() {
        const proposalId = await this.contract.students();
        return proposalId.toNumber();
    }
    
    async getYesVotes() {
        const yesVotes = await this.contract.votesForYes();
        return yesVotes.toNumber();
    }
    async getNoVotes() {
        const noVotes = await this.contract.votesForNo();
        return noVotes.toNumber();
    }
    
    async getVote() {
        const address = await this.contract.signer.getAddress();
        const vote = await this.contract.getVote(address);
        return vote.toNumber() || undefined;
    }
    
    async VOTE_FEE() {
        const VOTE_FEE = await this.contract.VOTE_FEE();
        return ethers.utils.formatEther(VOTE_FEE);
    }
    async vote(vote) {
        const fee = await this.VOTE_FEE();
        const tx = await this.contract.getVote(
            vote, {
                value: ethers.utils.parseEther(fee)
            }
        );
        return tx.hash;
    }
    
};

export default EthersMethod;
