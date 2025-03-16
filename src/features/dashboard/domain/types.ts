export interface DashboardStats {
  totalSubmissions: number;
  latestSubmission?: Date;
  submissionsByOption: Record<string, number>;
}
