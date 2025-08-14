import { getAuth, clerkClient } from '@clerk/express';

export const auth = async (req, res, next) => {
  try {
    const { userId } = getAuth(req); // get userId from token
    if (!userId) return res.status(403).json({ success: false, message: "Access denied" });

    // Fetch user from Clerk to get publicMetadata
    const user = await clerkClient.users.getUser(userId);
    const role = user.publicMetadata?.role; // should be "admin" for admins

    if (role !== "admin") {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: "Invalid token" });
  }
};

export default auth;
