export default function Languages() {
    return (
        <div className="flex flex-row gap-5 ml-10">
            <div className=" hover:opacity-50 hover:cursor-pointer">
                <span className="text-sm text-gray-500">English</span>
            </div>
            <div className=" hover:opacity-50 hover:cursor-pointer">
                <span className="text-sm text-gray-200 font-semibold">Portuguese</span>
            </div>
        </div>
    );
}