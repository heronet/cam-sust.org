"use client";

import React, { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";
import SectionHeader from "@/components/section-header";
import { Info } from "lucide-react";

const FAQPage = () => {
  const [language, setLanguage] = useState<"en" | "bn">("bn");
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number | null) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqData = {
    en: {
      faqs: [
        {
          icon: <Info className="w-5 h-5" />,
          category: "About CAM-SUST",
          question: "What is CAM-SUST?",
          answer:
            "Copernicus Astronomical Memorial of SUST (CAM-SUST) is the only astronomy research and outreach organization at Shahjalal University of Science and Technology (SUST), Bangladesh. It was founded on July 7, 2012, and officially registered on July 17, 2012 at SUST.\n\nOur motto is “Spreading knowledge gathered from the vast unknown,” CAM-SUST aims to build a national platform for astronomy in Bangladesh where people can share, discuss, and help each other and learn more about the universe.",
        },
        {
          icon: <Info className="w-5 h-5" />,
          category: "Activities",
          question: "What does CAM-SUST do?",
          answer:
            "Since its founding, CAM-SUST has been organizing many programs and events to help members learn astronomy and to popularize astronomy among the general public. Some of our core regular activities include: Biweekly Study Circles, Cosmania (School outreach program), Astro Carnival, Stargazing sessions, CAM-Talk, Seminars, Journal Club, Library, Workshops, World Space Week celebration, Research & Project initiatives, Summer/Winter Schools.",
        },
        {
          icon: <Info className="w-5 h-5" />,
          category: "Field Education",
          question: "What does our Field Education Sector do?",
          answer:
            "The Field Education Sector works to circulate the knowledge gained from our Study Circles into simple & engaging content for school and college students across the country.\nThis initiative comes from a sense of social responsibility. Why? Because, we believe that as university students, the amount of money the government spends for us is supported in part by the labor of farmers and workers. So, we owe them something in return. And we choose to give back by educating their children. That is why we visit schools in remote areas of Bangladesh and arrange interactive school programs named Cosmania. So far, we’ve organized school programs in Barisal, Sunamganj, Brahmanbaria, Sonargaon, Narayanganj, and Bogura.",
        },
        {
          icon: <Info className="w-5 h-5" />,
          category: "Programs",
          question: "What is the School Program or Cosmania?",
          answer:
            "The goal of Cosmania is to spark interest in astronomy among school and college students.\nA Cosmania includes:\n-> Presentations on exciting astronomy topics using projectors or hand-drawn posters\n-> Poster presentations for students of various age groups\n-> Demonstrations of solar and lunar eclipses using solar system models\n-> Virtual Reality exhibits using Lunar VR App to simulate walking on the Moon or visiting the Apollo 11 landing site\n-> Paper plane competitions and Water rocket launches etc.",
        },
        {
          icon: <Info className="w-5 h-5" />,
          category: "Membership",
          question: "How can I join CAM-SUST?",
          answer:
            "There are five types of membership at CAM-SUST. Those are \n\n 1. General Member \n 2. Executive Committee Member \n 3. Special Member \n 4. Advisory Member \n 5. Lifetime Member.\n\nAny current student of SUST can apply for General Membership by filling out a registration form and paying a small fee. Students from outside SUST including school, college, madrasa, and university students may apply for Special Membership, which is free of cost.\nMembership forms are available each year at the CAM-SUST tent during the university’s official Organizational Week. Online registration is also available year-round on our website. After applying, members are selected through either an online or offline interview.",
        },
        {
          icon: <Info className="w-5 h-5" />,
          category: "Astronomy in Bangladesh",
          question:
            "Why is an astronomy organization important in a developing country like Bangladesh?",
          answer:
            "It’s often said that a person without curiosity has a dead soul. Even in ancient times, whenever people got free time, they looked up at the sky and that curiosity led to the early understanding of time, seasons, and celestial motion.\n\nWhile we no longer need the stars to tell time, gazing at the sky remains a human instinct. And anyone who follows science even a little knows that our existence is connected to the universe from the Sun that powers our lives to the Moon that affects our tides and the stardust that forms our very bodies.\n\nAstronomy is not just a science, it’s a way of understanding our life. In that sense, interest in astronomy means interest in our own existence.\n\nSo yes, Bangladesh like any other part of the world needs astronomy organizations. Curiosity and the thirst for knowledge are not exclusive to developed countries. They belong to everyone including people of the Global South. That’s why we believe CAM-SUST has an important role to play.",
        },
      ],
    },
    bn: {
      faqs: [
        {
          icon: <Info className="w-5 h-5" />,
          category: "ক্যাম-সাস্ট সম্পর্কে",
          question: "ক্যাম-সাস্ট কী?",
          answer:
            "ক্যাম-সাস্ট শাবিপ্রবির একমাত্র জ্যোতির্বিজ্ঞান বিষয়ক সংগঠন যার পূর্ণরূপ হলো কোপার্নিকাস অ্যাস্ট্রোনমিক্যাল মেমোরিয়াল অব সাস্ট। সংগঠনটি যাত্রা শুরু করে ২০১২ সালের জুলাই মাসের ৭ তারিখে এবং বিশ্ববিদ্যালয়ের নিবন্ধভুক্ত হয় একই মাসের ১৭ তারিখে। সংগঠনটির মূল উদ্দেশ্য হল জ্যোতির্বিজ্ঞান চর্চা করা এবং এর প্রসারের মাধ্যমে সমাজের প্রচলিত কুসংস্কার দূর করা। তাই ক্যাম-সাস্টের মূলমন্ত্র হলো “অসংখ্য অজানা থেকে জ্ঞান আহরণ করে সেই জ্ঞানকে সকলের মধ্যে ছড়িয়ে দেওয়া।” এই মূলমন্ত্রকে মাথায় রেখে ক্যাম-সাস্টের লক্ষ্য হলো বাংলাদেশে জ্যোতির্বিজ্ঞানের একটি প্ল্যাটফর্ম তৈরি করা যেখানে সবাই এই বিষয়ে কথা বলবে, একজন আরেক জনের সমস্যা সমাধানে সাহায্য করবে।",
        },
        {
          icon: <Info className="w-5 h-5" />,
          category: "কার্যক্রম",
          question: "ক্যাম-সাস্ট কী করে?",
          answer:
            "প্রতিষ্ঠাকালীন সময় থেকেই ক্যাম-সাস্ট নানামুখী আয়োজনের মধ্য দিয়ে সদস্যদের জ্যোতির্বিজ্ঞান শিখন ও সর্বসাধারণের মাঝে জ্যোতির্বিজ্ঞানের জনপ্রিয়তা বৃদ্ধিতে কাজ করে যাচ্ছে। তবে অন্য সব সংগঠনের মতো আমাদেরও কিছু নিয়মিত কার্যক্রম আছে। যার মধ্যে অন্যতম হল: পাক্ষিক পাঠচক্র, কসম্যানিয়া, অ্যাস্ট্রো কার্নিভাল, স্টারগেজিং, ক্যাম-টক, জার্নাল ক্লাব, লাইব্রেরি,  সেমিনার, ওয়ার্কশপ, ওয়ার্ল্ড স্পেস উইক উদযাপন, রিসার্চ এন্ড প্রজেক্ট, সামার/উইন্টার স্কুল ইত্যাদি।",
        },
        {
          icon: <Info className="w-5 h-5" />,
          category: "ফিল্ড এডুকেশন",
          question: "ক্যাম-সাস্টের ফিল্ড এডুকেশন সেক্টরের কাজ কী?",
          answer:
            "পাঠচক্রের মাধ্যমে আমরা যেসকল অজানা জ্ঞান আহরণ করেছি তা সহজভাবে স্কুল-কলেজের শিক্ষার্থীদের কাছে উপস্থাপন করাই আমাদের এই সেক্টরের মূল লক্ষ্য। এই সেক্টরের জন্ম অনেকটা আমাদের দায়বদ্ধতা থেকে। প্রশ্ন হল কিসের দায়বদ্ধতা? আমরা যারা বিশ্ববিদ্যালয়ে পড়াশুনা করি তাদের পড়াশুনার খরচের বেশ বড় একটা অংশ আসে দেশের দিনমজুর, কৃষক ও শ্রমিকদের থেকে। তাই তাদের জন্য কিছু করা আমাদের কর্তব্য। তাদের জন্য কিছু করা বলতে আমরা তাদের ছেলে-মেয়েদের জন্য কিছু করা বুঝাচ্ছি। তাই আমরা বাংলাদেশের প্রতন্ত অঞ্চলগুলোর স্কুল-কলেজে যাই এবং শিক্ষার্থীদের সাথে জ্যোতির্বিজ্ঞান নিয়ে আলোচনা, গল্প ও খেলাধুলা করি। তারই ধারাবাহিকতায় আমরা এখন পর্যন্ত বরিশাল, সুনামগঞ্জ, ব্রাহ্মণবাড়িয়া, সোনারগাঁও, নারায়ণগঞ্জ, বগুড়াতে স্কুল প্রোগ্রাম বা কসম্যানিয়া আয়োজন করেছি।",
        },
        {
          icon: <Info className="w-5 h-5" />,
          category: "কর্মসূচি",
          question: "স্কুল প্রোগ্রাম বা কসম্যানিয়া কী?",
          answer:
            "স্কুল-কলেজের শিক্ষার্থীদের জ্যোতির্বিজ্ঞান নিয়ে আগ্রহ বাড়িয়ে দেয়া এই স্কুল প্রোগ্রাম এর লক্ষ্য। যাদের কাছে জ্যোতির্বিজ্ঞ্যান এখনও ব্ল্যাকহোলের মত অন্ধকার একটি অজানা বিষয় তাদের পর্যন্ত পৌছানোই আমাদের লক্ষ্য৷ আমরা সেই লক্ষ্য বাস্তবায়নে একটি কসম্যানিয়াতে যা যা করে থাকি তা হলো- জ্যোতির্বিজ্ঞানের চমকপ্রদ বিষয়গুলোর উপরে প্রেজেন্টেশন যা ডিজিটাল প্রজেক্টর কিংবা হাতে আঁকা পোস্টারের মাধ্যমে একজন প্রেজেন্টর বিভিন্ন ক্লাস এর শিক্ষার্থীদের সামনে তা উপস্থাপন করেন। এছাড়া শিক্ষার্থীদের প্রেজেন্টেশন থেকে চিন্তা করে প্রশ্নের উত্তর দেয়ার জন্যে একটি মজার পরীক্ষা রাখা হয়, কখনো বা রাখা হয় গেইম, অথবা শিক্ষার্থীদের পোস্টার প্রেজেন্টেশন। এছাড়া শিক্ষার্থীদের বয়সভেদে নানামুখী কার্যক্রম রাখা হয়। এতে তাদের অংশগ্রহণ থাকে চোখে পড়ার মতো! এছাড়াও সৌর মডেলের মাধ্যমে তাদের কিভাবে চন্দ্র গ্রহণ ও সুর্য গ্রহণ হয় তা ব্যবহারিক শিক্ষার মাধ্যমে দেখানো হয়। এছাড়া ভিআর প্রদর্শনী করে অ্যাপোলো ১১ এর ল্যান্ডিং স্পট কিংবা চন্দ্রপৃষ্ঠে হাঁটার অভিজ্ঞতা শিক্ষার্থীদের নিকট সবথেকে রোমাঞ্চকর বিষয়! সবশেষে আমরা আয়োজন করি, কাগজের প্লেন উড়ানোর প্রতিযোগিতা এবং ওয়াটার রকেট লঞ্চ প্রদর্শনী। এইভাবে সবার স্বতঃস্ফূর্ত অংশগ্রহণে আমাদের কসম্যানিয়া বা স্কুল প্রোগ্রামগুলো পূর্ণতা লাভ করে।",
        },
        {
          icon: <Info className="w-5 h-5" />,
          category: "সদস্যপদ",
          question: "ক্যাম-সাস্টের সাথে কিভাবে যুক্ত হতে পারবো?",
          answer:
            "ক্যাম-সাস্টের সদস্যপদ পাঁচ শ্রেণীর। এগুলো হল- সাধারণ সদস্য, কার্যনির্বাহী কমিটি সদস্য, বিশেষ সদস্য, পরামর্শক সদস্য ও আজীবন সদস্য। শাবিপ্রবিতে অধ্যয়নরত যেকোনো শিক্ষার্থী নির্ধারিত মূল্য পরিশোধ করে নিবন্ধন ফর্ম পূরণের মাধ্যমে সাধারণ সদস্যপদের আবেদন করতে পারে। এছাড়া শাবিপ্রবির বাইরে জ্যোতির্বিজ্ঞান নিয়ে আগ্রহী যেকোনো স্কুল, কলেজ, মাদ্রাসা ও বিশ্ববিদ্যালয়ের শিক্ষার্থী ক্যাম-সাস্টের বিশেষ সদস্যপদের জন্য আবেদন করতে পারে। বিশেষ সদস্যপদে আবেদনের ক্ষেত্রে কোনো অর্থমূল্য প্রদান করতে হয় না।\nপ্রতিবছর বিশ্ববিদ্যালয় প্রশাসন কর্তৃক নির্ধারিত সাংগঠনিক সপ্তাহে ক্যাম-সাস্টের টেন্টে এসে সাধারণ ও বিশেষ সদস্যপদের জন্য নিবন্ধন ফর্ম সংগ্রহ ও জমা দেওয়া যায়। এছাড়া প্রায় সারা বছর ওয়েবসাইটে অনলাইন নিবন্ধন ফর্ম পূরণের মাধ্যমেও আবেদন করা যায়। আবেদন পরবর্তী একটি অনলাইন বা অফলাইন ভাইবার মাধ্যমে সদস্যপদ দেওয়া হয়।",
        },
        {
          icon: <Info className="w-5 h-5" />,
          category: "বাংলাদেশে জ্যোতির্বিজ্ঞান",
          question:
            "বাংলাদেশের মতো তৃতীয় বিশ্বের একটি উন্নয়নশীল দেশে জ্যোতির্বিজ্ঞান সম্পর্কিত সংগঠন থাকার যৌক্তিকতা কতটুকু?",
          answer:
            "বলা হয়ে থাকে, যে মানুষের কৌতূহল নেই তার আত্মা মৃত। প্রাচীনকালে মানুষ যখনই দৈনন্দিন জীবনের কাজ থেকে সামান্য অবসর পেয়েছে তার মধ্যে খানিকটা সময়ের জন্য হলেও আকাশের দিকে তাকিয়েছে। আর এভাবেই ধীরে ধীরে সময় ও ঋতুর পরিবর্তনের সাথে মহাকাশীয় বস্তুগুলোর অবস্থান পরিবর্তনের মিল খুঁজে পেয়েছে। মানুষ শিখেছে জ্যোতিষ্কগুলোর অবস্থান দেখে সময়ের পরিমাপ।  বর্তমান যুগে সময় পরিমাপের জন্য আকাশ পর্যবেক্ষণ করা না হলেও কারণে অকারণে আকাশের দিকে তাকানো অনেকটা মানুষের স্বভাবগত বৈশিষ্ট্য। আর বিজ্ঞানের জগতের খানিকটা হলেও খোঁজখবর রাখেন এমন যেকোনো মানুষের জানার কথা যে আমাদের অস্তিত্বের সাথে আকাশের তারাকারাজি জড়িত। সূর্য নামের সৌরজগতের কেন্দ্রের তারাটি ছাড়া যেমন আমাদের অস্তিত্ব কল্পনা করা যায় না তেমনি চাঁদ নামক পৃথিবীর একমাত্র উপগ্রহটি বা অন্য কোন মহাকাশীয় বস্তুর অকস্মাৎ পরিবর্তনের জন্য পৃথিবীর উপর পড়তে পারে সুদূরপ্রসারী প্রভাব। আর সবচেয়ে গুরুত্বপূর্ণ ব্যপার, আমরা প্রত্যেকেই কোন না কোন তারার অংশ। কারণ আমাদের দেহের প্রতিটি মৌলিক উপাদানেরই সৃষ্টি কোন না কোন তারার কেন্দ্রে। তাই বলা যায় জ্যোতির্বিজ্ঞান নিয়ে আগ্রহ থাকা অনেকটা নিজের অস্তিত্ব নিয়ে আগ্রহ থাকার মতোই। আর জ্যোতির্বিজ্ঞান শুধু আমাদের নয় বরং পুরো মহাবিশ্বের অস্তিত্বের রহস্যকেই ব্যাখ্যা করে। আর মহাবিশ্ব নিয়ে, নিজেদের অস্তিত্ব নিয়ে আগ্রহী মানুষদের কৌতূহল নিবারণের জন্য, গবেষণার জন্যই বাংলাদেশে জ্যোতির্বিজ্ঞান সম্পর্কিত সংগঠনের প্রয়োজন। কারণ কৌতূহল কিংবা আগ্রহ শুধুমাত্র উন্নত বিশ্বের মানুষের বৈশিষ্ট্য নয়, বরং সারা বিশ্বের মানুষের বৈশিষ্ট্য, বাংলাদেশের মতো যেকোনো তৃতীয় বিশ্বের মানুষেরও।",
        },
      ],
    },
  };

  const currentContent = faqData[language];

  return (
    <div className="pt-24 bg-black text-white overflow-hidden relative">
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <SectionHeader
            title="FAQ"
            subtitle="Find answers to some common questions about CAM-SUST and our activities. If you don’t find what you’re looking for here, feel free to reach out to us via phone or email"
          />

          {/* Language Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-900 rounded-lg p-1 border border-gray-800 flex">
              <button
                onClick={() => setLanguage("bn")}
                className={`px-6 py-3 rounded-md transition-all w-full duration-300 flex items-center gap-2 ${
                  language === "bn"
                    ? "bg-gray-800 text-white shadow-md"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                <Globe className="w-4 h-4" />
                বাংলা
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-6 py-3 rounded-md transition-all w-full duration-300 flex items-center gap-2 ${
                  language === "en"
                    ? "bg-gray-800 text-white shadow-md"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                <Globe className="w-4 h-4" />
                English
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Accordions */}
        <div className="max-w-4xl mx-auto space-y-4">
          {currentContent.faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-all duration-300 hover:bg-gray-900/90"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-800/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-gray-800 rounded-lg border border-gray-700 max-md:hidden">
                    {faq.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">
                      {faq.category}
                    </div>
                    <div className="text-lg font-semibold text-white">
                      {faq.question}
                    </div>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openAccordion === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openAccordion === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="md:ml-14 text-gray-300 leading-relaxed whitespace-pre-wrap">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
