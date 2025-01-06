export const logout = async (req, res) => {
  try {
    // Clear the HTTP-only cookie
    res.clearCookie("jwt");

    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};