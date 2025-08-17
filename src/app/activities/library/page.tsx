"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { BookOpen, Search, Mail } from "lucide-react";
import SectionHeader from "@/components/section-header";

interface Book {
  id: number;
  title: string;
  author: string;
  publisher: string;
  category:
    | "Astronomy"
    | "Astrophysics"
    | "Science Fiction"
    | "General"
    | "Research";
  available: boolean;
}

const LibraryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample book data
  const books: Book[] = [
    {
      id: 1,
      title: "Cosmos",
      author: "Carl Sagan",
      publisher: "Random House",
      category: "Astronomy",
      available: true,
    },
    {
      id: 2,
      title: "নায়ীরা",
      author: "মুহম্মদ জাফর ইকবাল",
      publisher: "সময়",
      category: "Science Fiction",
      available: true,
    },

    {
      id: 3,
      title: "মহাবিশ্বে ভ্রমণ ও আকাশ চেনো তারা চেনো",
      author: "সৌমেন সাহা",
      publisher: "তূর্য",
      category: "Astronomy",
      available: true,
    },

    {
      id: 4,
      title: "প্রডিজি",
      author: "মুহম্মদ জাফর ইকবাল",
      publisher: "প্রথমা",
      category: "Science Fiction",
      available: true,
    },
    {
      id: 5,
      title: "ইরন",
      author: "মুহম্মদ জাফর ইকবাল",
      publisher: "সময়",
      category: "Science Fiction",
      available: false,
    },
    {
      id: 6,
      title: "যারা বায়োবট",
      author: "মুহম্মদ জাফর ইকবাল",
      publisher: "তাম্রলিপি",
      category: "Science Fiction",
      available: true,
    },
  ];

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.publisher.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-24 mt-12">
      {/* Header */}
      <SectionHeader
        title="CAM-SUST Library"
        subtitle="We have a collection of books, magazines, journals and digital resources"
      />

      {/* Library Rules */}
      <section className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Library Rules</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Bengali Rules */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-200">
                গ্রন্থাগারের নিয়মাবলী
              </h3>

              <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">
                    এক: গ্রন্থাগারের সদস্যপদ লাভ
                  </h4>
                  <ul className="space-y-1 ml-4">
                    <li>
                      ১) ক্যাম-সাস্টের সাধারণ সদস্যরা ক্যাম-লাইব্রেরির সদস্য বলে
                      বিবেচিত হবে।
                    </li>
                    <li>
                      ২) ক্যাম-সাস্টের বিশেষ সদস্যগণ প্রেসিডেন্ট ও
                      লাইব্রেরিয়ানের অনুমতিক্রমে লাইব্রেরির বই ব্যবহার করতে
                      পারবেন।
                    </li>
                    <li>৩) বিশেষ সদস্য কারা?</li>
                    <li className="ml-4">৩.১) স্কুল ও কলেজ প্রতিনিধিগণ</li>
                    <li className="ml-4">
                      ৩.২) ক্যাম-সাস্টের সদস্য নয় কিন্তু জ্যোতির্বিজ্ঞানী
                      আগ্রহী এবং ক্যাম-সাস্টের শুভাকাঙ্ক্ষী ব্যক্তি। এক্ষেত্রে
                      শাবিপ্রবির বাইরের কারো জন্যও এটি প্রযোজ্য হবে।
                    </li>
                    <li>
                      ৪) লাইব্রেরির সদস্যগণের নাম, বিভাগ, রেজি. নং, পূর্ণাঙ্গ
                      ঠিকানা, মোবাইল নম্বর ও ইমেইল লাইব্রেরিয়ানের নিকট সংরক্ষিত
                      থাকবে।
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">
                    দুই: বই ধার নেওয়া
                  </h4>
                  <ul className="space-y-1 ml-4">
                    <li>
                      ১) একজন সদস্য প্রতিবারে সর্বোচ্চ ১টি বই ধার নিতে পারবেন।
                    </li>
                    <li>২) জরিমানা বকেয়া থাকলে বই সরবরাহ বন্ধ রাখা হবে।</li>
                    <li>
                      ৩) লাইব্রেরি থেকে বই নেয়ার জন্য{" "}
                      <span className="text-blue-400">
                        publication.camsust@gmail.com
                      </span>{" "}
                      মেইলে নিজের তথ্য ও বইয়ের নাম উল্লেখ পূর্বক মেইল করতে হবে।
                    </li>
                    <li>
                      ৪) এছাড়া লাইব্রেরিয়ান কর্তৃক নির্ধারিত দিনে উপস্থিত
                      থেকেও বই নেয়া যাবে।
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">
                    তিন: বই ফেরত দেওয়া
                  </h4>
                  <ul className="space-y-1 ml-4">
                    <li>১) বই নেয়ার ৭ দিনের ভেতরে বই ফেরত দিতে হবে।</li>
                    <li>
                      ২) বই যথাসময়ে হস্তান্তর করতে ব্যর্থ হলে দুই সপ্তাহ পর
                      থেকে প্রতি দিনের জন্য ১০ টাকা করে জরিমানা দিতে হবে।
                    </li>
                    <li>
                      ৩) কোন কারণে বিশ্ববিদ্যালয় টানা ৭ দিন বা তার বেশি বন্ধ
                      থাকলে বন্ধ শুরু হওয়ার ৩ দিন আগে থেকে সকল বই লাইব্রেরিতে
                      জমা দিতে হবে।
                    </li>
                    <li>
                      ৪) বই ফেরত দিতে কেউ ১ সপ্তাহের বেশি দেরী করলে ঐ সপ্তাহের
                      জন্য তিনি নতুন বই নিতে পারবেন না।
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">
                    চার: অন্যান্য
                  </h4>
                  <ul className="space-y-1 ml-4">
                    <li>
                      ১) লাইব্রেরি থেকে ধার নেয়া বইয়ে কোন প্রকার দাগ, অলংকরণ,
                      মন্তব্য, টীকা, টিপ্পনী ইত্যাদি দেওয়া অথবা বইয়ের
                      পৃষ্ঠা/মলাট ছেঁড়া সম্পূর্ণরূপে নিষিদ্ধ। বই হারালে অথবা
                      বইয়ের কোনরূপ ক্ষতি সাধন করলে বই গ্রহণকারী উক্ত বইয়ের
                      একটি নতুন কপি প্রদান অথবা বইয়ে উল্লেখিত মূল্যের দ্বিগুণ
                      মূল্য পরিশোধ করতে বাধ্য থাকবেন।
                    </li>
                    <li>
                      ২) স্বাভাবিকভাবে বর্তমান পাবলিকেশন সেক্রেটারি
                      লাইব্রেরিয়ান হিসেবে দ্বায়িত্ব পালন করবেন। তবে
                      কার্যনির্বাহীর কমিটির সম্মতিক্রমে উক্ত কমিটির যে কেউ কিংবা
                      সাধারণ সদস্যদের মধ্য থেকে যে কেউ একটি নির্দিষ্ট সময়ের
                      জন্য লাইব্রেরিয়ান হিসেবে দ্বায়িত্ব গ্রহণ করতে পারবেন।
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* English Rules */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-200">
                Library Rules
              </h3>

              <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">
                    1. Library Membership
                  </h4>
                  <ul className="space-y-1 ml-4">
                    <li>
                      1. All general members of CAM-SUST are considered members
                      of the CAM-Library.
                    </li>
                    <li>
                      2. Special members may access library books with the
                      approval of the President and the Librarian.
                    </li>
                    <li>3. Who are considered special members?</li>
                    <li className="ml-4">
                      3.1. School and college representatives
                    </li>
                    <li className="ml-4">
                      3.2. Individuals who are not general members of CAM-SUST
                      but have a strong interest in astronomy and are
                      well-wishers of CAM-SUST. This includes persons outside
                      SUST as well.
                    </li>
                    <li>
                      4. All library members&apos; details like name,
                      department, registration number, full address, phone
                      number, and email will be recorded and maintained by the
                      Librarian.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">
                    2. Borrowing Books
                  </h4>
                  <ul className="space-y-1 ml-4">
                    <li>1. A member can borrow one book at a time.</li>
                    <li>2. Books will not be issued if there are any fines.</li>
                    <li>
                      3. To borrow a book, send an email to{" "}
                      <span className="text-blue-400">
                        publication.camsust@gmail.com
                      </span>{" "}
                      with your personal details and the title of the book.
                    </li>
                    <li>
                      4. Books can also be borrowed at the designated days set
                      by the Librarian.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">
                    3. Returning Books
                  </h4>
                  <ul className="space-y-1 ml-4">
                    <li>
                      1. Books must be returned within 7 days of borrowing.
                    </li>
                    <li>
                      2. If a book is not returned on time, a fine of 10 BDT per
                      day will be charged starting from the 15th day.
                    </li>
                    <li>
                      3. In case the university is closed for 7 consecutive days
                      or more, all borrowed books must be returned at least 3
                      days before.
                    </li>
                    <li>
                      4. If a member is more than 1 week late in returning a
                      book, they will not be allowed to borrow any new books
                      during that week.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">
                    4. Additional Rules
                  </h4>
                  <ul className="space-y-1 ml-4">
                    <li>
                      1. It is strictly prohibited to write, draw, annotate, or
                      mark books borrowed from the library. Damaging or losing a
                      book will require the borrower to either replace it with a
                      new copy or pay twice the listed price of the book.
                    </li>
                    <li>
                      2. By default, the current Publication Secretary will
                      serve as the Librarian. However, with the approval of the
                      Executive Committee, any EC member or general member can
                      take on the role of Librarian for a specific period.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Book List */}
      <section className="container mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Book List</h2>

          {/* Search */}
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"
                size={20}
              />
              <input
                type="text"
                placeholder="Search books..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:border-gray-700 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Books Table */}
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-900/50 border-b border-gray-800">
                  <tr>
                    <th className="text-left py-4 px-6 text-gray-300 font-semibold">
                      S.N.
                    </th>
                    <th className="text-left py-4 px-6 text-gray-300 font-semibold">
                      Title
                    </th>
                    <th className="text-left py-4 px-6 text-gray-300 font-semibold">
                      Author
                    </th>
                    <th className="text-left py-4 px-6 text-gray-300 font-semibold">
                      Publisher
                    </th>
                    <th className="text-left py-4 px-6 text-gray-300 font-semibold">
                      Category
                    </th>
                    <th className="text-center py-4 px-6 text-gray-300 font-semibold">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBooks.map((book, index) => (
                    <motion.tr
                      key={book.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="border-b border-gray-800/50 hover:bg-gray-900/30 transition-colors"
                    >
                      <td className="py-4 px-6 text-gray-400 font-mono text-sm">
                        {index + 1}
                      </td>
                      <td className="py-4 px-6 text-white font-medium">
                        {book.title}
                      </td>
                      <td className="py-4 px-6 text-gray-300">{book.author}</td>
                      <td className="py-4 px-6 text-gray-300">
                        {book.publisher}
                      </td>
                      <td className="py-4 px-6">
                        <span className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300 border text-nowrap border-gray-700">
                          {book.category}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span
                          className={`inline-flex px-2 py-1 text-xs rounded-full font-medium ${
                            book.available
                              ? "bg-green-900/30 text-green-400 border border-green-800"
                              : "bg-red-900/30 text-red-400 border border-red-800"
                          }`}
                        >
                          {book.available ? "Available" : "Borrowed"}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {filteredBooks.length === 0 && (
            <div className="text-center py-12">
              <BookOpen size={48} className="mx-auto text-gray-600 mb-4" />
              <p className="text-gray-400">
                No books found matching your search
              </p>
            </div>
          )}

          <div className="mt-6 text-center text-sm text-gray-500">
            Showing {filteredBooks.length} of {books.length} books
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-8 max-w-md mx-auto">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800 border border-gray-700 mb-4">
              <Mail size={24} className="text-gray-300" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
            <p className="text-gray-400 text-sm mb-4">
              For book requests and library assistance
            </p>
            <a
              href="mailto:publication.camsust@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white border border-gray-700 hover:border-gray-600 rounded-lg transition-all duration-300 text-sm"
            >
              <Mail size={16} />
              publication.camsust@gmail.com
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default LibraryPage;
