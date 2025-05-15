import React, { useState } from "react";

const MediaKit = () => {
  const [activePage, setActivePage] = useState("insights");

  // Inline styles as a fallback
  const styles = {
    // Ändra dessa egenskaper i ditt styles-objekt
    container: {
      minHeight: "100vh",
      background: "linear-gradient(to bottom right, #fdf2f8, #ede9fe)",
      padding: "1.5rem",
      fontFamily: "sans-serif",
      boxSizing: "border-box", // Lägg till detta
      display: "flex", // Behåll detta
      justifyContent: "center", // Behåll detta
      alignItems: "flex-start", // Ändra till flex-start istället för center
    },

    content: {
      maxWidth: "64rem",
      width: "100%", // Lägg till detta
      margin: "0 auto",
      background: "white",
      borderRadius: "0.75rem",
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      overflow: "hidden",
    },
    header: {
      background: "linear-gradient(to right, #8b5cf6, #ec4899)",
      padding: "2rem",
      color: "white",
      textAlign: "center",
    },
    title: {
      fontSize: "2.25rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
    },
    username: {
      fontSize: "1.25rem",
      fontWeight: "500",
      marginBottom: "0.75rem",
    },
    description: {
      fontSize: "1.125rem",
      marginBottom: "1rem",
    },
    location: {
      fontSize: "1rem",
      fontStyle: "italic",
    },
    tags: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "0.75rem",
      marginTop: "1.5rem",
    },
    tag: {
      padding: "0.25rem 1rem",
      background: "rgba(255, 255, 255, 0.3)",
      borderRadius: "9999px",
      fontSize: "0.875rem",
      fontWeight: "500",
    },
    nav: {
      background: "#f3f4f6",
      padding: "0.75rem 1.5rem",
    },
    navInner: {
      display: "flex",
      justifyContent: "center",
      gap: "1.5rem",
    },
    navButton: {
      padding: "0.5rem 0.75rem",
      fontSize: "0.875rem",
      fontWeight: "500",
      borderRadius: "0.375rem",
      cursor: "pointer",
      border: "none",
    },
    activeNavButton: {
      background: "#8b5cf6",
      color: "white",
    },
    inactiveNavButton: {
      color: "#374151",
      background: "transparent",
    },
    contentSection: {
      padding: "1.5rem",
    },
    sectionTitle: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: "#1f2937",
      marginBottom: "1.5rem",
    },
    statsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "1.5rem",
      marginBottom: "2rem",
    },
    statCard: {
      background: "#f9fafb",
      borderRadius: "0.5rem",
      padding: "1.5rem",
      textAlign: "center",
    },
    statLabel: {
      fontSize: "0.875rem",
      color: "#6b7280",
      textTransform: "uppercase",
      marginBottom: "0.25rem",
    },
    statValue: {
      fontSize: "1.875rem",
      fontWeight: "bold",
      color: "#1f2937",
    },
    footer: {
      background: "#f9fafb",
      padding: "1rem 1.5rem",
      textAlign: "center",
      color: "#4b5563",
      fontSize: "0.875rem",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Header Section */}
        <div style={styles.header}>
          <h1 style={styles.title}>Media Kit - Sanne Delin</h1>
          <p style={styles.username}>@mmmsanne</p>
          <p style={styles.description}>Food & ASMR Content Creator</p>
          <p style={styles.location}>Sweden 🇸🇪</p>

          <div style={styles.tags}>
            <span style={styles.tag}>Food</span>
            <span style={styles.tag}>ASMR</span>
            <span style={styles.tag}>Lifestyle</span>
            <span style={styles.tag}>Programming</span>
          </div>
        </div>

        {/* Navigation */}
        <div style={styles.nav}>
          <nav style={styles.navInner}>
            <button
              onClick={() => setActivePage("insights")}
              style={{
                ...styles.navButton,
                ...(activePage === "insights"
                  ? styles.activeNavButton
                  : styles.inactiveNavButton),
              }}
            >
              Audience Insights
            </button>
            <button
              onClick={() => setActivePage("rates")}
              style={{
                ...styles.navButton,
                ...(activePage === "rates"
                  ? styles.activeNavButton
                  : styles.inactiveNavButton),
              }}
            >
              Collaboration Rates
            </button>
            <button
              onClick={() => setActivePage("successes")}
              style={{
                ...styles.navButton,
                ...(activePage === "successes"
                  ? styles.activeNavButton
                  : styles.inactiveNavButton),
              }}
            >
              Past Successes
            </button>
          </nav>
        </div>

        {/* Content Section */}
        <div style={styles.contentSection}>
          {/* Audience Insights Page */}
          {activePage === "insights" && (
            <div>
              <h2 style={styles.sectionTitle}>Audience Insights</h2>

              {/* Stats Grid - simplified for inline styles */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <div style={styles.statCard}>
                  <p style={styles.statLabel}>Followers</p>
                  <p style={styles.statValue}>37.2K</p>
                </div>
                <div style={styles.statCard}>
                  <p style={styles.statLabel}>Total Likes</p>
                  <p style={styles.statValue}>1.6M</p>
                </div>
                <div style={styles.statCard}>
                  <p style={styles.statLabel}>Total Views</p>
                  <p style={styles.statValue}>15M</p>
                </div>
                <div style={styles.statCard}>
                  <p style={styles.statLabel}>Top Video Views</p>
                  <p style={styles.statValue}>5.9M</p>
                </div>
                <div style={styles.statCard}>
                  <p style={styles.statLabel}>FYP Discovery</p>
                  <p style={styles.statValue}>63.4%</p>
                </div>
                <div style={styles.statCard}>
                  <p style={styles.statLabel}>Weekly Views</p>
                  <p style={styles.statValue}>289K</p>
                </div>
              </div>

              {/* More content here */}
            </div>
          )}

          {/* Collaboration Rates Page */}
          {activePage === "rates" && (
            <div>
              <h2 style={styles.sectionTitle}>Collaboration Packages</h2>

              {/* Packages - simplified for inline styles */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "1.5rem",
                  marginBottom: "2rem",
                }}
              >
                {/* Standard Package */}
                <div
                  style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ padding: "1.5rem" }}>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        color: "#1f2937",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Standard
                    </h3>
                    <p
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#8b5cf6",
                        marginBottom: "1rem",
                      }}
                    >
                      6,500 SEK
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          marginBottom: "0.75rem",
                        }}
                      >
                        <span
                          style={{ color: "#10b981", marginRight: "0.5rem" }}
                        >
                          ✓
                        </span>
                        <span style={{ color: "#4b5563" }}>1 TikTok Video</span>
                      </li>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          marginBottom: "0.75rem",
                        }}
                      >
                        <span
                          style={{ color: "#10b981", marginRight: "0.5rem" }}
                        >
                          ✓
                        </span>
                        <span style={{ color: "#4b5563" }}>
                          Creative Direction
                        </span>
                      </li>
                      <li style={{ display: "flex", alignItems: "flex-start" }}>
                        <span
                          style={{ color: "#10b981", marginRight: "0.5rem" }}
                        >
                          ✓
                        </span>
                        <span style={{ color: "#4b5563" }}>
                          Performance Report
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Premium Package */}
                <div
                  style={{
                    border: "2px solid #8b5cf6",
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <div style={{ padding: "1.5rem" }}>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        color: "#1f2937",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Premium
                    </h3>
                    <p
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#8b5cf6",
                        marginBottom: "1rem",
                      }}
                    >
                      8,000 SEK
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          marginBottom: "0.75rem",
                        }}
                      >
                        <span
                          style={{ color: "#10b981", marginRight: "0.5rem" }}
                        >
                          ✓
                        </span>
                        <span style={{ color: "#4b5563" }}>1 TikTok Video</span>
                      </li>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          marginBottom: "0.75rem",
                        }}
                      >
                        <span
                          style={{ color: "#10b981", marginRight: "0.5rem" }}
                        >
                          ✓
                        </span>
                        <span style={{ color: "#4b5563" }}>
                          Creative Direction
                        </span>
                      </li>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          marginBottom: "0.75rem",
                        }}
                      >
                        <span
                          style={{ color: "#10b981", marginRight: "0.5rem" }}
                        >
                          ✓
                        </span>
                        <span style={{ color: "#4b5563" }}>
                          Performance Report
                        </span>
                      </li>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          marginBottom: "0.75rem",
                        }}
                      >
                        <span
                          style={{ color: "#10b981", marginRight: "0.5rem" }}
                        >
                          ✓
                        </span>
                        <span style={{ color: "#4b5563" }}>
                          Spark Ads Usage
                        </span>
                      </li>
                      <li style={{ display: "flex", alignItems: "flex-start" }}>
                        <span
                          style={{ color: "#10b981", marginRight: "0.5rem" }}
                        >
                          ✓
                        </span>
                        <span style={{ color: "#4b5563" }}>
                          Exclusivity (7 days)
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Series Package */}
                <div
                  style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ padding: "1.5rem" }}>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        color: "#1f2937",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Series
                    </h3>
                    <p
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#8b5cf6",
                        marginBottom: "1rem",
                      }}
                    >
                      21,000 SEK
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          marginBottom: "0.75rem",
                        }}
                      >
                        <span
                          style={{ color: "#10b981", marginRight: "0.5rem" }}
                        >
                          ✓
                        </span>
                        <span style={{ color: "#4b5563" }}>
                          3 TikTok Videos
                        </span>
                      </li>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          marginBottom: "0.75rem",
                        }}
                      >
                        <span
                          style={{ color: "#10b981", marginRight: "0.5rem" }}
                        >
                          ✓
                        </span>
                        <span style={{ color: "#4b5563" }}>
                          Creative Direction
                        </span>
                      </li>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          marginBottom: "0.75rem",
                        }}
                      >
                        <span
                          style={{ color: "#10b981", marginRight: "0.5rem" }}
                        >
                          ✓
                        </span>
                        <span style={{ color: "#4b5563" }}>
                          Performance Report
                        </span>
                      </li>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          marginBottom: "0.75rem",
                        }}
                      >
                        <span
                          style={{ color: "#10b981", marginRight: "0.5rem" }}
                        >
                          ✓
                        </span>
                        <span style={{ color: "#4b5563" }}>
                          Spark Ads Usage
                        </span>
                      </li>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          marginBottom: "0.75rem",
                        }}
                      >
                        <span
                          style={{ color: "#10b981", marginRight: "0.5rem" }}
                        >
                          ✓
                        </span>
                        <span style={{ color: "#4b5563" }}>
                          Exclusivity (14 days)
                        </span>
                      </li>
                      <li style={{ display: "flex", alignItems: "flex-start" }}>
                        <span
                          style={{ color: "#10b981", marginRight: "0.5rem" }}
                        >
                          ✓
                        </span>
                        <span style={{ color: "#4b5563" }}>
                          Bonus: Story Content
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Past Successes Page */}
          {activePage === "successes" && (
            <div>
              <h2 style={styles.sectionTitle}>Content Highlights</h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "1.5rem",
                  marginBottom: "2rem",
                }}
              >
                {/* Success 1 */}
                <div
                  style={{
                    background: "#f9fafb",
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "12rem",
                      background: "#e5e7eb",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#9ca3af",
                      }}
                    >
                      Sushi
                    </span>
                  </div>
                  <div style={{ padding: "1rem" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "0.25rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "500",
                          color: "#6b7280",
                        }}
                      >
                        Views
                      </span>
                      <span
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "500",
                          color: "#111827",
                        }}
                      >
                        5.7M
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "500",
                          color: "#6b7280",
                        }}
                      >
                        Engagement
                      </span>
                      <span
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "500",
                          color: "#111827",
                        }}
                      >
                        8.2%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Success 2 */}
                <div
                  style={{
                    background: "#f9fafb",
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "12rem",
                      background: "#e5e7eb",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#9ca3af",
                      }}
                    >
                      New Sushi Place
                    </span>
                  </div>
                  <div style={{ padding: "1rem" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "0.25rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "500",
                          color: "#6b7280",
                        }}
                      >
                        Views
                      </span>
                      <span
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "500",
                          color: "#111827",
                        }}
                      >
                        5.9M
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "500",
                          color: "#6b7280",
                        }}
                      >
                        Engagement
                      </span>
                      <span
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "500",
                          color: "#111827",
                        }}
                      >
                        7.8%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Success 3 */}
                <div
                  style={{
                    background: "#f9fafb",
                    borderRadius: "0.5rem",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "12rem",
                      background: "#e5e7eb",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#9ca3af",
                      }}
                    >
                      Dubai Chocolate
                    </span>
                  </div>
                  <div style={{ padding: "1rem" }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "0.25rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "500",
                          color: "#6b7280",
                        }}
                      >
                        Views
                      </span>
                      <span
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "500",
                          color: "#111827",
                        }}
                      >
                        78.4K
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "500",
                          color: "#6b7280",
                        }}
                      >
                        Engagement
                      </span>
                      <span
                        style={{
                          fontSize: "0.875rem",
                          fontWeight: "500",
                          color: "#111827",
                        }}
                      >
                        6.9%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <p>
            This media kit was created to showcase my audience insights and
            collaboration options. Feel free to reach out to discuss potential
            partnerships at mmmsanne@gmail.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediaKit;
