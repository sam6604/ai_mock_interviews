// D:\repo1\ai_mock_interviews-main\ai_mock_interviews-main\app\(root)\interview\page.tsx
import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
    const user = await getCurrentUser();

    return (
        <>
            <h3>Interview generation</h3>

            {/* Render Agent only when we have a user and provide safe fallbacks */}
            {user ? (
                <Agent
                    userName={user.name}
                    userId={user.id ?? undefined}
                    // Some projects call this profileURL or profileImage — use fallback chain to be safe
                    profileImage={user?.profileURL ?? user?.profileImage ?? ""}

                    type="generate"
                />
            ) : (
                <p>Loading user…</p>
            )}
        </>
    );
};

export default Page;
