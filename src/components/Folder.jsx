import clsx from "clsx";
import { useState } from "react"
import { AnimatePresence, motion } from 'framer-motion'
import File from "@/components/File";
import Icon from "@/components/Icon";

export default function Folder({ className, containerClassName, folderName, files, isExpanded = false }) {
  const [expanded, setExpanded] = useState(isExpanded);
  const toggle = () => setExpanded(!expanded);

  return (
    <div className={clsx(containerClassName, "block")}>
      <span className={clsx(className, "text-gray-900 dark:text-white font-bold bg-no-repeat")} onClick={toggle}>
        {
          (expanded)
          ? <Icon iconName="FaFolderOpen" iconProps={{ className:"inline-block mr-2" }}/>
          : <Icon iconName="FaFolder" iconProps={{ className:"inline-block mr-2" }}/>
        }
        {folderName}
      </span>
      <AnimatePresence>
        {expanded && (
            <motion.ul
              key={folderName}
              className="pt-[0.2em] pl-[0.5em] ml-[0.35em] list-none border-l-2 border-zinc-700"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.1 }}
            >
              {files.map((file, index) => (
                <li key={index} className="py-[0.2em]">
                  {file.type === "folder" ? (
                    <Folder {...file} />
                  ) : (
                    <File className="text-white" fileName={file.fileName}/>
                  )}
                </li>
              ))}
            </motion.ul>
        )}
        </AnimatePresence>
    </div>
  )
}