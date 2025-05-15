import React, { useState } from "react";
import newSushiImage from "../assets/newsushi.png";
import sushiImage from "../assets/sushi.png";
import dubaiImage from "../assets/dubai.png";
import profileImage from "../assets/profile.png";

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
    <div className="bg-gray-50 rounded-lg p-5 text-center shadow-sm hover:shadow-md transition flex-1 min-w-[120px]">
      <p className="text-2xl md:text-4xl font-bold text-gray-800">{value}</p>
      <p className="text-xs md:text-sm text-gray-500 uppercase mt-1">{label}</p>
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
    <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex-1 min-w-[250px] md:min-w-[200px] relative">
      <div className="h-28 bg-pink-100 flex items-flex-start justify-center">
        <span className="text-xl font-bold mt-10 text-pink-500">{title}</span>
      </div>
      {/* {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
            POPULAR
          </div>
        </div>
      )} */}
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
  const ContentCard = ({ href, title, image, views, engagement }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition flex-shrink-0 w-full sm:w-[250px] md:w-[300px] block"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-bottom"
        />
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
    </a>
  );

  const renderTimeframeContent = () => {
    switch (activeTimeframe) {
      case "year":
        return (
          <>
            {/* Responsive stat cards grid - scrollable on small screens, wraps on larger screens */}
            <div className="flex flex-row flex-wrap md:flex-wrap gap-4 mb-8 overflow-x-auto pb-4">
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
            {/* Responsive stat cards grid - scrollable on small screens, wraps on larger screens */}
            <div className="flex flex-row flex-wrap md:flex-wrap gap-4 mb-8 overflow-x-auto pb-4">
              <StatCard label="Followers" value="37.2K" />
              <StatCard label="Likes (Period)" value="51K" />
              <StatCard label="Video Views" value="1.7M" />
              <StatCard label="Peak Daily Views" value="112K+" />
              <StatCard label="FYP Discovery" value="63.4%" />
              <StatCard label="Comments" value="1.7K" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Content Performance
                </h3>
                <PerformanceIndicator label="Engagement" value="78%" />
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

      case "month":
        return (
          <>
            {/* Responsive stat cards grid - scrollable on small screens, wraps on larger screens */}
            <div className="flex flex-row flex-wrap md:flex-wrap gap-4 mb-8 overflow-x-auto pb-4">
              <StatCard label="Followers" value="37.2K" />
              <StatCard label="Likes (Period)" value="23K" />
              <StatCard label="Video Views" value="800K" />
              <StatCard label="Peak Daily Views" value="112K+" />
              <StatCard label="FYP Discovery" value="63.4%" />
              <StatCard label="Comments" value="778" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Content Performance
                </h3>
                <PerformanceIndicator label="Engagement" value="75%" />
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

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-2 sm:p-4 md:p-6 flex justify-center items-start">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header Section - Made responsive */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 sm:p-6 md:p-8 text-center text-white">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <img
              src={profileImage}
              alt="Sanne Delin"
              className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
            />
            <div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                Media Kit - Sanne Delin
              </h1>
              <p className="text-lg md:text-xl mb-2 md:mb-3">@mmmsanne</p>
              <p className="text-base md:text-lg mb-1 md:mb-2">
                Food & ASMR Content Creator
              </p>
              <p className="text-sm md:text-base italic mb-3 md:mb-4">
                Sweden 🇸🇪
              </p>

              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-2 md:mt-4">
                <span className="px-3 py-1 bg-white/30 rounded-full text-xs md:text-sm font-medium">
                  Food
                </span>
                <span className="px-3 py-1 bg-white/30 rounded-full text-xs md:text-sm font-medium">
                  ASMR
                </span>
                <span className="px-3 py-1 bg-white/30 rounded-full text-xs md:text-sm font-medium">
                  Lifestyle
                </span>
                <span className="px-3 py-1 bg-white/30 rounded-full text-xs md:text-sm font-medium">
                  Programming
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation - Made responsive with scrolling */}
        <div className="bg-gray-100 px-2 sm:px-4 md:px-6 py-2 md:py-3 overflow-x-auto">
          <nav className="flex justify-start md:justify-center gap-2 md:gap-4 min-w-max">
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
        <div className="p-4 md:p-6">
          {/* Audience Insights Page */}
          {activePage === "insights" && (
            <div>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-0">
                  Audience Insights
                </h2>
                <div className="flex space-x-2 md:space-x-3 overflow-x-auto">
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
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
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
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                Collaboration Packages
              </h2>

              {/* Grid for larger screens, scroll for mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
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

              <div className="bg-gray-50 rounded-lg p-4 md:p-6 mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                  Additional Services
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  For additional services such as Extended Usage Rights,
                  Whitelisting, Script Revisions, or Rush Fee, please get in
                  touch so we can establish a mutually agreeable price and
                  arrangement. Let's talk about it!
                </p>
                <p className="text-sm md:text-base italic text-gray-600">
                  Contact me at: mmmsanne@gmail.com
                </p>
              </div>
            </div>
          )}

          {/* Past Successes Page */}
          {activePage === "successes" && (
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                Content Highlights
              </h2>

              {/* Grid for larger screens, scroll for mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
                <ContentCard
                  href="https://www.tiktok.com/@mmmsanne/video/7351855378608557345?lang=sv-SE"
                  image={sushiImage}
                  title="Sushi"
                  views="5.7M"
                  engagement="8.2%"
                />
                <ContentCard
                  href="https://www.tiktok.com/@mmmsanne/video/7227056977468214555?lang=sv-SE"
                  image={newSushiImage}
                  title="New Sushi Place"
                  views="5.9M"
                  engagement="7.8%"
                />
                <ContentCard
                  href="https://www.tiktok.com/@mmmsanne/video/7501945663526145302?lang=sv-SE"
                  image={dubaiImage}
                  title="Dubai Chocolate from Normal"
                  views="78.4K"
                  engagement="6.9%"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 p-3 md:p-4 text-center text-gray-600 text-xs md:text-sm">
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
