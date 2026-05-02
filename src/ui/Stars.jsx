import {Star } from "lucide-react";
export default function Stars({ rate }) {
  return (
    <div className="flex ">
      {[1, 2, 3, 4, 5].map((star) =>
        rate >= star ? (
          <Star
            className="text-yellow-500 "
            key={star}
            size={12}
            fill="currentColor"
          />
        ) : (
          <Star key={star} className="text-yellow-500" size={12} fill="transparent" />
        ),
      )}
    </div>
  );
}
