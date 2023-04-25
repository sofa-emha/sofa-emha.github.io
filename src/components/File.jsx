import clsx from "clsx";
import Icon from "@/components/Icon";

export default function File({ className, fileName }) {
  const name = "BsFiletype" + fileName.slice(fileName.lastIndexOf('.') + 1).replace(/^\w/, (firstLatter) => firstLatter.toUpperCase())
  return (
    <div className="block">
      <span className={clsx(className,"top-[0.1em] left-0 bg-[length:1em_1em] bg-no-repeat text-gray-900 dark:text-white")}>
        <Icon iconName={name} iconProps={{ className:"inline-block mr-2" }}/>
        {fileName}
      </span>
    </div>
  )
}