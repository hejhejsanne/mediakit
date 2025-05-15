import React, { useState } from "react";

const MediaKit = () => {
  const [activePage, setActivePage] = useState("insights");
  const [activeTimeframe, setActiveTimeframe] = useState("year");

  // Navigation button component for reuse
  const NavButton = ({ label, pageName, current }) => (
    <button
      onClick={() => setActivePage(pageName)}
      className={`px-3 py-2 text-sm font-medium rounded-md transition ${
        current === pageName
          ? "bg-purple-500 text-white"
          : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      {label}
    </button>
  );

  // Timeframe button component
  const TimeframeButton = ({ label, period, current }) => (
    <button
      onClick={() => setActiveTimeframe(period)}
      className={`px-3 py-1 text-xs font-medium rounded-md transition ${
        current === period
          ? "bg-purple-100 text-purple-500 border border-purple-500"
          : "text-gray-600 border border-gray-300 hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );

  // Stat card component for audience insights
  const StatCard = ({ label, value }) => (
    <div className="bg-gray-50 rounded-lg p-5 text-center shadow-sm hover:shadow-md transition flex-1 min-w-[150px]">
      <p className="text-4xl font-bold text-gray-800">{value}</p>
      <p className="text-sm text-gray-500 uppercase mt-1">{label}</p>
    </div>
  );
  // Performance indicator component
  const PerformanceIndicator = ({ label, value, percentage }) => (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-600">{label}</span>
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-800">{value}</span>
          {percentage && (
            <span className="ml-2 text-xs font-medium text-green-600">
              {percentage}
            </span>
          )}
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-purple-500 h-2 rounded-full"
          style={{ width: `${parseFloat(value)}%` }}
        ></div>
      </div>
    </div>
  );
  // Demographic bar component
  const DemographicBar = ({ label, percentage, color = "bg-purple-500" }) => (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-600">{label}</span>
        <span className="text-sm font-medium text-gray-800">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`${color} h-2 rounded-full`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );

  // Package card component
  const PackageCard = ({ title, price, features, popular = false }) => (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex-1 min-w-[200px] max-w-[400px]">
      <div className="h-28 bg-gray-200 flex items-flex-start justify-center">
        <span className="text-xl font-bold mt-10 text-pink-500">{title}</span>
      </div>
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            POPULAR
          </div>
        </div>
      )}
      <div className="p-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-500">Price</span>
          <span className="text-sm font-medium text-purple-500 font-bold">
            {price}
          </span>
        </div>
        <div className="space-y-2">
          {features.map((feature, idx) => (
            <div key={idx} className="flex justify-between">
              <span className="text-sm font-medium text-gray-500 flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Content highlight card
  const ContentCard = ({ title, views, engagement }) => (
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex-1 min-w-[250px] max-w-[400px]">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <span className="text-xl font-bold text-gray-400">{title}</span>
      </div>
      <div className="p-4">
        <div className="flex justify-between mb-1">
          <span className="text-sm font-medium text-gray-500">Views</span>
          <span className="text-sm font-medium text-gray-800">{views}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-medium text-gray-500">Engagement</span>
          <span className="text-sm font-medium text-gray-800">
            {engagement}
          </span>
        </div>
      </div>
    </div>
  );
  // Helper function to render the correct timeframe content
  // Helper function to render the correct timeframe content
  const renderTimeframeContent = () => {
    switch (activeTimeframe) {
      case "year":
        return (
          <>
            {/* Ändra från grid till flex för horisontell layout */}
            <div className="flex flex-row gap-4 mb-8 overflow-x-auto pb-4">
              <StatCard label="Total Followers" value="37.2K" />
              <StatCard label="Total Likes" value="1.6M" />
              <StatCard label="Total Views" value="15M" />
              <StatCard label="Top Video Views" value="5.9M" />
              <StatCard label="FYP Discovery" value="63.4%" />
              <StatCard label="Weekly Views" value="289K" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div
                className="bg-white p-6 rounded-lg shadow-sm"
                style={{ backgroundColor: "white" }}
              >
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Content Performance
                </h3>
                <PerformanceIndicator label="Engagement" value="82%" />
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Age Demographics
                </h3>
                <DemographicBar label="18-24" percentage={45} />
                <DemographicBar label="25-34" percentage={35} />
                <DemographicBar label="35-44" percentage={15} />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Gender Demographics
              </h3>
              <div className="flex items-center">
                <div className="w-3/4 bg-gray-200 rounded-full h-4 mr-4">
                  <div className="bg-pink-400 h-4 rounded-l-full w-3/4"></div>
                </div>
                <div className="text-sm">
                  <span className="font-semibold">75% F</span> / 25% M
                </div>
              </div>
            </div>
          </>
        );

      case "sixty":
        return (
          <>
            {/* Ändra från grid till flex för horisontell layout */}
            <div className="flex flex-row gap-4 mb-8 overflow-x-auto pb-4">
              <StatCard label="Followers" value="37.2K" />
              <StatCard label="Likes (Period)" value="51K" />
              <StatCard label="Video Views" value="1.7M" />
              <StatCard label="Peak Daily Views" value="112K+" />
              <StatCard label="FYP Discovery" value="63.4%" />
              <StatCard label="Comments" value="1.7K" />
            </div>

            {/* Resten av innehållet förblir detsamma */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* ... */}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              {/* ... */}
            </div>
          </>
        );

      case "month":
        return (
          <>
            {/* Ändra från grid till flex för horisontell layout */}
            <div className="flex flex-row gap-4 mb-8 overflow-x-auto pb-4">
              <StatCard label="Followers" value="37.2K" />
              <StatCard label="Likes (Period)" value="23K" />
              <StatCard label="Video Views" value="800K" />
              <StatCard label="Peak Daily Views" value="112K+" />
              <StatCard label="FYP Discovery" value="63.4%" />
              <StatCard label="Comments" value="778" />
            </div>

            {/* Resten av innehållet förblir detsamma */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* ... */}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              {/* ... */}
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-6 flex justify-center items-start">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-8 text-center text-white">
          <h1 className="text-3xl font-bold mb-2">Media Kit - Sanne Delin</h1>
          <p className="text-xl mb-3">@mmmsanne</p>
          <p className="text-lg mb-2">Food & ASMR Content Creator</p>
          <p className="text-base italic mb-4">Sweden 🇸🇪</p>

          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <span className="px-4 py-1 bg-white/30 rounded-full text-sm font-medium">
              Food
            </span>
            <span className="px-4 py-1 bg-white/30 rounded-full text-sm font-medium">
              ASMR
            </span>
            <span className="px-4 py-1 bg-white/30 rounded-full text-sm font-medium">
              Lifestyle
            </span>
            <span className="px-4 py-1 bg-white/30 rounded-full text-sm font-medium">
              Programming
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-gray-100 px-6 py-3">
          <nav className="flex justify-center gap-4">
            <NavButton
              label="Audience Insights"
              pageName="insights"
              current={activePage}
            />
            <NavButton
              label="Collaboration Rates"
              pageName="rates"
              current={activePage}
            />
            <NavButton
              label="Past Successes"
              pageName="successes"
              current={activePage}
            />
          </nav>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Audience Insights Page */}
          {activePage === "insights" && (
            <div>
              <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
                  Audience Insights
                </h2>
                <div className="flex space-x-3">
                  <TimeframeButton
                    label="368 dagar"
                    period="year"
                    current={activeTimeframe}
                  />
                  <TimeframeButton
                    label="60 dagar"
                    period="sixty"
                    current={activeTimeframe}
                  />
                  <TimeframeButton
                    label="28 dagar"
                    period="month"
                    current={activeTimeframe}
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {activeTimeframe === "year" &&
                    "Audience & Performance (last 368 days)"}
                  {activeTimeframe === "sixty" &&
                    "Audience & Performance (last 60 days)"}
                  {activeTimeframe === "month" &&
                    "Audience & Performance (last 28 days)"}
                </h3>
                {renderTimeframeContent()}
              </div>
            </div>
          )}

          {/* Collaboration Rates Page */}
          {activePage === "rates" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Collaboration Packages
              </h2>

              <div className="flex flex-row gap-6 mb-8 overflow-x-auto">
                <PackageCard
                  title="Standard"
                  price="6,500 SEK"
                  features={[
                    "1 TikTok Video",
                    "Creative Direction",
                    "Performance Report",
                  ]}
                />
                <PackageCard
                  title="Premium"
                  price="8,000 SEK"
                  features={[
                    "1 TikTok Video",
                    "Creative Direction",
                    "Performance Report",
                    "Spark Ads Usage",
                    "Exclusivity (7 days)",
                  ]}
                  popular={true}
                />
                <PackageCard
                  title="Series"
                  price="21,000 SEK"
                  features={[
                    "3 TikTok Videos",
                    "Creative Direction",
                    "Performance Report",
                    "Spark Ads Usage",
                    "Exclusivity (14 days)",
                    "Bonus: Story Content",
                  ]}
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Additional Services
                </h3>
                <p className="text-gray-600 mb-4">
                  For additional services such as Extended Usage Rights,
                  Whitelisting, Script Revisions, or Rush Fee, please get in
                  touch so we can establish a mutually agreeable price and
                  arrangement.
                </p>
                <p className="italic text-gray-600">
                  Contact me at: mmmsanne@gmail.com
                </p>
              </div>
            </div>
          )}

          {/* Past Successes Page */}
          {/* Past Successes Page */}
          {activePage === "successes" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Content Highlights
              </h2>

              {/* Ändra denna div från grid till flex för horisontell layout */}
              <div className="flex flex-row gap-6 mb-8 overflow-x-auto">
                <ContentCard title="Sushi" views="5.7M" engagement="8.2%" />
                <ContentCard
                  title="New Sushi Place"
                  views="5.9M"
                  engagement="7.8%"
                />
                <ContentCard
                  title="Dubai Chocolate from Normal"
                  views="78.4K"
                  engagement="6.9%"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-4 text-center text-gray-600 text-sm">
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
