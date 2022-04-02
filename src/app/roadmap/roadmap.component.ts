import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {
  roadMaps: RoadMap[] = [
    {
      title: "Q1 2022",
      nameTitle:"Reactor Phase",
      content: [
        "Deploy Real Time Tracking of Staking / Liquidity Mining from the profile",
        "Enable Staking for all listed assets",
        "Deploy ETH Nodes",
        "Delpoy all Landing Pages"
      ],
      visible:true,
    },
    {
      title: "Q2 2022",
      nameTitle: "Launching Phase",
      content: [
        "Run first DeFi services on QRYPTOBANK",
        "Develop QRB white paper ",
        "Launching the QRB airdrop",
        "Run NFTmaQer, create your NFT and boost your NFT community ",
        "Run Qlubdeal, create your private community, promote your project and grow revenues  ",
        "Run Qryptex: Asset Tokenization - Real Estate",
        "Run Dynamic Dashboard",
        "Run Qredit Get credit on crypto-assets",
        "Run Ambassador network around the world ",
        " QRYPTOBANK card connected with IBAN and payment module. ",
      ],
      visible:false,
    },
    {
      title: "Q3 2022",
      nameTitle:"Expansion Phase",
      content: [
        "Launch of Qrystal: private bank with crypto-currency assets. ",
        "Launch of airQube: investment fund focused on blockchains. ",
        "Listing of the QRB-ETH pair (Polkadot) on Uniswap.",
        "Passive income via: staking - airdrop - affiliation ",
        "Enable mining pool tracking via staking / liquidity",
        "Deploy QRB Smart Contracts on the Binance Smart Chain",
        "Activate Cross-Chain Liquidity Mining",
        "Activation of Liquidity Vaults",
        "Activate Liquidity Mining for all listed pools",
      ],
      visible:false,
    },
    {
      title: "Q4 2022",
      nameTitle:"Moon Phase",
      content: [
        "Deploy QRB protocol on Polygon and Fantom",
        "List QRB protocol on Coinmarketcap",
        "Deploy QRB bridge to exchange QRBs from channel A to channel B.",
        "Deployment of wallet tracking for Solana, Fantom, Moonriver, Cronos, xDai, Optimism, Abitrum."
      ],
      visible:false,
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  currentFaqIndex: number = 0;
  openRoadMap(roadMap: RoadMap) {
    // uncollpase the previous one
    if (this.currentFaqIndex != -1) {
      if (this.currentFaqIndex != this.roadMaps.indexOf(roadMap)) {
        if (this.roadMaps[this.currentFaqIndex].visible) {
          this.roadMaps[this.currentFaqIndex].visible = false;
        }
      }
    }
    this.currentFaqIndex = this.roadMaps.indexOf(roadMap);

    roadMap.visible = !roadMap.visible;
  }

}

interface RoadMap{
  title: string;
  nameTitle: string;
  content: string[];
  visible: boolean;
}
