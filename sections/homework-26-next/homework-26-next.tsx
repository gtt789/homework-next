"use client";

import { useState } from "react";
import Image from "next/image";

export default function PostCreateForm() {
  const [content, setContent] = useState("");
  const [productName, setProductName] = useState("");
  const [system, setSystem] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 제출 로직
    console.log({ content, productName, system });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* 헤더 */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">청산별곡</h1>
          <p className="text-gray-600 whitespace-pre-wrap">
            {`살어리 살어리랏다 청산(青山)애 살어리랏다멀위랑 도래랑 먹고 청산(青山)에 살어리랏다얄리얄리 얄랑셩 얄라리 얄라`}
          </p>
          <p className="text-gray-500 text-sm mt-2">2024/11/1</p>
        </div>

        {/* 시 내용 */}
        <div className="mb-6 p-4 bg-blue-50 rounded-lg">
          {[
            "살겠노라 살겠노라. 청산에 살겠노라.",
            "머루랑 다래를 먹고 청산에 살겠노라.",
            "얄리얄리 얄량셩 얄라리 얄라",
            "",
            "우는구나 우는구나 새야 자고 일어나 우는구나 새야.,",
            ".",
            "너보다 시름 많은 나도 자고 일어나 우노라.",
            "",
            "얄리얄리 얄랴셩 얄라리 얄라",
            "너보다 시름 많은 나도 자고 일어나 우노라.",
            "얄리얄리 얄라셩 얄라리 얄라",
            "",
            "갈던 밭(사래) 갈던 밭 보았므먀. 물 아래(근처) 갈던 밭 보았느냐.",
            "이끼 묻은 쟁기를 가지고 물 아래 갈던 밭 보았느냐.",
            "얄리얄리 얄라셩 얄라리 얄라",
            "",
            "어디다 던지는 돌인가 누구를 맞히려던 돌인가.",
            "미워할 이도 사랑할 이도 없이 맞아서 우노라.",
            "얄리얄리 얄라셩 얄라리 얄라",
            "",
            "살겠노라 살겠노라. 바다에 살겠노라.",
            "나문재, 굴, 조개를 먹고 바다에 살겠노라.",
            "얄리얄리 얄라셩 얄라리 얄라",
            "",
            "가다가 가다가 듣노라. 에정지(미상) 가다가 듣노라.",
            "사슴(탈 쓴 광대)이 솟대에 올라서 해금을 켜는 것을 듣노라.",
            "얄리얄리 얄라셩 얄라리 얄라",
            "",
            "가다 보니 배불룩한 술독에 독한 술을 빚는구나.",
            "조롱박꽃 모양 누룩이 매워 (나를) 붙잡으니 내 어찌 하리이까.",
            "얄리얄리 얄라셩 얄라리 얄라",
          ].map((line, index) => (
            <p key={index} className="text-gray-700 mb-1">
              {line}
            </p>
          ))}
        </div>

        {/* 바닷가 사진 */}
        <div className="mb-6">
          <div className="relative h-64 w-full rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="바닷가 의자"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* 폼 */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 제품명 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              제품명: *
            </label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="작성자, 비밀번호"
              required
            />
          </div>

          {/* 내용 입력 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              작성자 명을 입력해 주세요, 비밀번호를 입력해주세요.
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="댓글을 입력해 주세요."
              maxLength={100}
              required
            />
            <div className="text-right text-sm text-gray-500 mt-1">
              {content.length}/100
            </div>
          </div>

          {/* 시스템 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              시스템: *
            </label>
            <select
              value={system}
              onChange={(e) => setSystem(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">시스템을 선택하세요</option>
              <option value="system1">시스템 1</option>
              <option value="system2">시스템 2</option>
              <option value="system3">시스템 3</option>
            </select>
          </div>

          {/* 아늑한 소파 사진 */}
          <div className="mt-6">
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="아늑한 소파"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* 제출 버튼 */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
          >
            작성 완료
          </button>
        </form>
      </div>
    </div>
  );
}
