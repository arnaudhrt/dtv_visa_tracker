// src/types/index.ts
import { ObjectId } from "mongodb";

export interface VisaExperience {
  _id?: ObjectId;
  createdAt: Date;
  updatedAt: Date;

  // User info (without auth for now)
  userName: string;
  userEmail?: string;

  // Embassy/Location info
  embassyCountry: string;
  embassyCity: string;
  applicationDate: Date;

  // Visa details
  visaType: string;
  processingTimeDays?: number;
  status: "approved" | "rejected" | "pending" | "withdrawn";

  // Documents provided
  documentsProvided: string[];
  additionalDocuments?: string;

  // Financial requirements
  bankStatementMonths?: number;
  bankBalanceAmount?: number;
  bankBalanceCurrency?: string;

  // Experience details
  difficultyRating: number; // 1-5
  experienceSummary: string;
  tips?: string;

  // Metadata
  helpfulVotes: number;
  isVerified: boolean;
  isFeatured: boolean;
}

export interface ExperienceFilters {
  embassyCountry?: string;
  embassyCity?: string;
  status?: string;
  visaType?: string;
  minProcessingTime?: number;
  maxProcessingTime?: number;
}

export const VISA_TYPES = ["DTV-Workcation", "DTV-Digital Nomad", "DTV-Medical Treatment", "DTV-Thai Soft Power", "DTV-Other"] as const;

export const VISA_STATUS = ["approved", "rejected", "pending", "withdrawn"] as const;

export const COMMON_DOCUMENTS = [
  "Passport",
  "Visa Application Form",
  "Passport Photos",
  "Bank Statement",
  "Employment Letter",
  "Portfolio/Work Samples",
  "Medical Certificate",
  "Travel Insurance",
  "Flight Booking",
  "Hotel Booking",
  "Invitation Letter",
  "Company Registration",
  "Tax Returns",
  "Freelance Contracts",
  "Educational Certificates",
  "Proof of Accommodation",
] as const;
