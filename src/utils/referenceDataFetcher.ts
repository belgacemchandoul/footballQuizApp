import { DocumentReference, doc, getDoc } from "firebase/firestore";
import { firestore } from "../config/firebase";

const fetchReferenceData = async (ref: DocumentReference | string) => {
  if (!ref) return null;
  const refPath = typeof ref === "string" ? ref : ref.path;
  const refDoc = await getDoc(doc(firestore, refPath));
  return refDoc.exists() ? refDoc.data() : null;
};

export default fetchReferenceData