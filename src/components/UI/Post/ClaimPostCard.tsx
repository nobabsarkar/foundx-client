"use client";

import { format } from "date-fns";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import { Avatar } from "@nextui-org/avatar";

import ImageGallery from "./ImageGellery";

import ClaimModal from "@/srcapp/(WithCommonLayout)/(user)/profile/claim-requests/page";

type TProps = {
  post: any;
};

export default function ClaimPostCard({ post }: TProps) {
  const { claimant, item, description } = post || {};

  // const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [answers, setAnswers] = useState({});

  // const handleAnswers = (data: Record<string, any>) => {
  //   setAnswers(data);
  //   setIsModalOpen(true);
  // };

  return (
    <div className="mb-2 rounded-md bg-default-100 p-4">
      <div className="border-b border-default-200 pb-2">
        <div className="border-b border-default-200 py-4">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <Link href={`/found-items/${item?._id}`}>
                <h1 className="cursor-pointer text-2xl">{item?.title}</h1>
              </Link>
              <p className="flex items-center gap-1 text-xs">
                Found on: <Calendar width={14} />
                {format(new Date(item?.dateFound), "dd MMM, yyyy")}
              </p>
            </div>
            <div>
              <p className="flex items-center gap-1">
                <MapPin width={18} />
                {item?.location}, {item?.city}
              </p>
            </div>
          </div>
          <p>{item?.description}</p>
        </div>

        <ImageGallery images={item?.images} />
      </div>

      <div>
        {/* {claimRequests?.map((claimRequest) => {
          const { claimant, answers, description: comment, _id } = claimRequest;
          const { profilePhoto, name } = claimant as IClaimant;

          console.log(profilePhoto); */}
        {/* return ( */}
        <div
          key={claimant?._id}
          className="mx-auto my-3 flex w-full items-center gap-2"
        >
          <Avatar
            isBordered
            name="Test"
            radius="sm"
            src={claimant?.profilePhoto}
          />
          <div className="flex w-full items-center justify-between rounded-md bg-default-200 px-4 py-2 dark:bg-[#333335]">
            <div>
              <p className="text-xs text-default-600">{claimant?.name}</p>
              <p>{description}</p>
            </div>

            {/* <Eye
              className="cursor-pointer"
              onClick={() =>
                handleAnswers({ answers: answers, id: claimant?._id })
              }
            /> */}
            <ClaimModal post={post} />
          </div>
        </div>
      </div>
    </div>
  );
}
