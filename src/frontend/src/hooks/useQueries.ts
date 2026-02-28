import { useQuery } from "@tanstack/react-query";
import type { Student } from "../backend.d";
import { useActor } from "./useActor";

const DEFAULT_STUDENT: Student = {
  regNo: "949151",
  name: "Rakesh Rajbhar",
  instituteName: "GHC HOSPITALS AND INSTITUTE",
  instituteAddress: "NEXT TO BHARAT GEAR COMPANY, KAUSA-MUMBRA, MUMBAI-400612",
  course: "BSS DIPLOMA IN OPERATION THEATRE TECHNOLOGY",
  duration: "TWO YEARS - 2023-2025",
};

export function useGetStudent() {
  const { actor, isFetching } = useActor();
  return useQuery<Student>({
    queryKey: ["student"],
    queryFn: async () => {
      if (!actor) return DEFAULT_STUDENT;
      try {
        return await actor.getStudent();
      } catch {
        return DEFAULT_STUDENT;
      }
    },
    enabled: !!actor && !isFetching,
    placeholderData: DEFAULT_STUDENT,
  });
}
