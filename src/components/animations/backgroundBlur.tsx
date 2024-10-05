export function BackgroundBlur() {
  return (
    <div className="relative">
      <div
        className=" scale-down-mobile absolute top-20 left-10 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 opacity-30 blur-3xl rounded-full"
        style={{
          animation: "float1 5s ease-in-out infinite",
        }}
      ></div>

      {/* Blurry Div #2 */}
      <div
        className="scale-down-mobile absolute bottom-20 right-10 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[175px] md:h-[175px] lg:w-[200px] lg:h-[200px] bg-gradient-to-b from-pink-500 via-red-400 to-yellow-500 opacity-20 blur-2xl rounded-full"
        style={{
          animation: "float2 15s ease-in-out infinite",
        }}
      ></div>

      {/* Blurry Div #3 */}
      <div
        className="scale-down-mobile absolute top-[40%] left-[30%] w-[125px] h-[125px] sm:w-[175px] sm:h-[175px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] bg-gradient-to-b from-cyan-500 via-teal-400 to-green-400 opacity-25 blur-3xl rounded-full"
        style={{
          animation: "float2 15s ease-in-out infinite",
        }}
      ></div>

      {/* CSS for Animations */}
      <style>{`
        @keyframes float1 {
          0% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
          100% { transform: translateY(0); }
        }

        @keyframes float2 {
        0% { 
            transform: translate(0, 0); 
        }
        25% { 
            transform: translate(20px, -20px); 
        }
        50% { 
            transform: translate(40px, 40px); 
        }
        75% { 
            transform: translate(-20px, 20px); 
        }
        100% { 
            transform: translate(0, 0); 
        }
        }

        @keyframes float3 {
          0% { transform: translateY(0); }
          50% { transform: translateY(-50px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
