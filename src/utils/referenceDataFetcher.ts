// utils/referenceDataFetcher.ts
import { DocumentReference, doc, getDoc } from "firebase/firestore";
import { firestore } from "../config/firebase";

type ReferenceData = { name: string; logo: string } | null;

const fetchReferenceData = async (ref: DocumentReference | string | (DocumentReference | string)[]): Promise<ReferenceData[] | ReferenceData> => {
  if (!ref) return null;

  try {
    if (Array.isArray(ref)) {
      const results = await Promise.all(
        ref.map(async (r) => {
          const refPath = typeof r === "string" ? r : r.path;
          const refDoc = await getDoc(doc(firestore, refPath));
          return refDoc.exists() ? (refDoc.data() as { name: string; logo: string }) : null;
        })
      );
      return results.filter(result => result !== null) as ReferenceData[];
    } else {
      const refPath = typeof ref === "string" ? ref : ref.path;
      const refDoc = await getDoc(doc(firestore, refPath));
      return refDoc.exists() ? (refDoc.data() as { name: string; logo: string }) : null;
    }
  } catch (error) {
    console.error("Failed to fetch reference data:", error);
    return null;
  }
};

export default fetchReferenceData;
