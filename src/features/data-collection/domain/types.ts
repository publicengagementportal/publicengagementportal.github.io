export interface FormData {
  dropdown: string;
  textInput: string;
  files: File[];
}

export interface FormState {
  data: FormData;
  isSubmitting: boolean;
  error: string | null;
}

export interface FormSubmissionResponse {
  success: boolean;
  error?: string;
  submissionId?: string;
}
