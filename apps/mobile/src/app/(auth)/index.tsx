import { Redirect } from "expo-router";

export default function DefaultAuthPage() {
  return <Redirect href="/login" />;
}
