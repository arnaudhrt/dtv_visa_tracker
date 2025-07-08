// src/types/index.ts
import { ObjectId } from "mongodb";

export type JobType = "Employee" | "Freelancer" | "Unemployed" | "Business owner" | "Student" | "Retired" | "Other" | "Goverment official";
export type SoftPowerType = "Muay Thai" | "Cooking class" | "Thai language course";
export type statuses =
  | "Pending document check"
  | "Pending approval"
  | "Request document"
  | "Request interview"
  | "Checking additional documents"
  | "Approved"
  | "Rejecte / cancel visa application"
  | "Issued visa"
  | "Delivered visa by email";

export interface VisaExperience {
  _id?: ObjectId;
  createdAt: Date;
  updatedAt: Date;

  // User info (without auth for now)
  userCountry: string;
  userEmail?: string;
  facebookName?: string;
  allowContact?: boolean;

  // Embassy/Location info
  embassyCountry: string;
  embassyCity: string;
  applicationDate: Date;

  // Visa details
  DTVType: "Workcation" | "Soft Power" | "Spouse and children";
  job: JobType;
  softPowerType?: SoftPowerType;
  timeLine: {
    status: statuses;
    date: Date;
  }[];
  finalStatus: statuses;
  totalDays?: number;

  // Documents provided
  documentsProvided: string[];
  additionalDocumentRequested?: string[];

  // Financial requirements
  howManyMonthsBankStatement: number;
  totalBankBalanceAmountInThb: number;
  howLongHeldRequiredBankBalance: string;

  // Experience details
  difficultyRating: number; // 1-5
  experienceSummary: string;

  // interview
  interviewDate?: Date;
  interviewSummary?: string;
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
  "All passport pages",
  "Profile photos",
  "Bank statement for past 3 months",
  "Bank statement for past 6 months",
  "Bank balance certificate",
  "Employment letter",
  "Portfolio/work samples",
  "Medical certificate",
  "Travel insurance",
  "Flight booking",
  "Flight ticket",
  "Hotel booking",
  "Photo of hotel key",
  "Stamp on passport of country application",
  "Invitation letter",
  "Payslips",
  "Company registration",
  "Proof of tax payment",
  "Freelance contracts",
  "Educational certificates",
  "Proof of accommodation in Thailand",
  "Proof of accommodation in home country",
] as const;
