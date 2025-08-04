"use client"
import React from "react"
import { motion, useScroll, useTransform, useSpring, type MotionValue } from "motion/react"
import { Heart, MessageCircle, Share, Repeat2, MoreHorizontal, Sparkles } from "lucide-react"

type SocialMediaPost = {
  type: "instagram" | "twitter" | "linkedin" | "facebook"
  username: string
  handle?: string
  title?: string
  avatar: string
  image?: string
  content?: string
  caption?: string
  likes: number
  comments?: number
  retweets?: number
  shares?: number
  timeAgo: string
}

export const HeroParallax = ({
  socialMediaPosts,
}: {
  socialMediaPosts: SocialMediaPost[]
}) => {
  const firstRow = socialMediaPosts.slice(0, 8)
  const secondRow = socialMediaPosts.slice(8, 16)
  const thirdRow = socialMediaPosts.slice(16, 24)
  const [isHovered, setIsHovered] = React.useState(false)
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], isHovered ? [-200, 200] : [0, 300]), springConfig)
  const translateXSecond = useSpring(
    useTransform(scrollYProgress, [0, 1], isHovered ? [200, -200] : [-300, 0]),
    springConfig,
  )
  const translateXThird = useSpring(
    useTransform(scrollYProgress, [0, 1], isHovered ? [-100, 300] : [0, -200]),
    springConfig,
  )
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig)
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig)
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], isHovered ? [-150, 150] : [-100, 100]),
    springConfig,
  )

  return (
    <div
      ref={ref}
      className="h-[300vh] pt-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className={`transition-all duration-500 ${isHovered ? "mt-8" : ""}`}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-6 justify-center mb-8">
          {firstRow.map((post, index) => (
            <SocialMediaCard post={post} translate={translateX} key={`first-${post.username}-${index}`} />
          ))}
        </motion.div>

        <motion.div className="flex flex-row space-x-6 justify-center mb-8">
          {secondRow.map((post, index) => (
            <SocialMediaCard post={post} translate={translateXSecond} key={`second-${post.username}-${index}`} />
          ))}
        </motion.div>

        <motion.div className="flex flex-row-reverse space-x-reverse space-x-6 justify-center">
          {thirdRow.map((post, index) => (
            <SocialMediaCard post={post} translate={translateXThird} key={`third-${post.username}-${index}`} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="w-full px-4 pt-8 pb-16 flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl sm:text-5xl font-['Bree_Serif'] font-semibold text-[#000000] flex items-center justify-center gap-2 mb-4">
          <motion.span
            animate={{ y: [0, -4, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Sparkles className="w-5 h-5 text-neutral-900" />
          </motion.span>
          Elevate Your <span className="text-[#45027d]">Social Game</span>
          <motion.span
            animate={{ y: [0, 4, 0], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2, delay: 1 }}
          >
            <Sparkles className="w-5 h-5 text-neutral-900" />
          </motion.span>
        </h1>

        <p className="text-lg sm:text-xl text-[#000000] font-['Bree_Serif'] font-medium leading-relaxed mb-6">
          <span className="inline-flex items-center gap-2">
            <motion.span
              animate={{ y: [0, -3, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              <Sparkles className="w-4 h-4 text-neutral-900" />
            </motion.span>
            Reach your audience across all platforms with ease.
          </span>
          <br />
          <span className="inline-flex items-center gap-1">
            Create, schedule, and analyze your content like a pro all in one place.
            <motion.span
              animate={{ y: [0, 3, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
            >
              <Sparkles className="w-4 h-4 text-neutral-900" />
            </motion.span>
          </span>
        </p>

        <button className="px-6 py-3 rounded-[10px] border border-black/30 text-[#07070e] font-['Bree_Serif'] font-medium text-base sm:text-lg bg-gradient-to-r from-[#7FE6EC] to-[#9685F5] hover:scale-105 transition-all duration-300">
          Get Started
        </button>
      </motion.div>
    </div>

  )
}

export const SocialMediaCard = ({
  post,
  translate,
}: {
  post: SocialMediaPost
  translate: MotionValue<number>
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -5,
        scale: 1.02,
        x: 20,
      }}
      className="group/post relative shrink-0"
    >
      {post.type === "instagram" && <InstagramPost post={post} />}
      {post.type === "twitter" && <TwitterPost post={post} />}
      {post.type === "linkedin" && <LinkedInPost post={post} />}
      {post.type === "facebook" && <FacebookPost post={post} />}
    </motion.div>
  )
}

const InstagramPost = ({ post }: { post: SocialMediaPost }) => {
  const getAvatarImage = (username: string) => {
    const avatarMap: { [key: string]: string } = {
      designstudio: "/avatar-1.png",
      creativecode: "/avatar-2.png",
      webdev_daily: "/avatar-3.png",
      design_inspiration: "/avatar-4.png",
      mobile_first: "/avatar-5.png",
      code_aesthetics: "/avatar-6.png",
      frontend_magic: "/avatar-7.png",


    }
    return avatarMap[username] || "/avatar-1.png"
  }

  const getPostImage = (username: string) => {
    const imageMap: { [key: string]: string } = {
      designstudio: "/post-1.png",
      creativecode: "/post-2.png",
      webdev_daily: "/post-3.png",
      design_inspiration: "/post-4.png",
      mobile_first: "/post-5.png",
      code_aesthetics: "/post-6.png",
      frontend_magic: "/post-7.png",
    }
    return imageMap[username] || "/post-1.png"
  }

  return (
    <div
      className="w-80 rounded-lg shadow-lg overflow-hidden border border-gray-200"
      style={{ backgroundColor: "#fce7f3" }}
    >
      {/* Header */}
      <div className="flex items-center p-4">
        <img
          src={getAvatarImage(post.username) || "/placeholder.svg"}
          alt={post.username}
          className="w-8 h-8 rounded-full mr-3"
        />
        <div className="flex-1">
          <p className="font-semibold text-sm text-gray-900">{post.username}</p>
        </div>
        <MoreHorizontal className="w-5 h-5 text-gray-500" />
      </div>

      {/* Image */}
      {post.image && (
        <img
          src={getPostImage(post.username) || "/placeholder.svg"}
          alt="Post content"
          className="w-full h-80 object-cover"
        />
      )}

      {/* Actions */}
      <div className="p-4">
        <div className="flex items-center space-x-4 mb-3">
          <Heart className="w-6 h-6 text-gray-700 hover:text-red-500 cursor-pointer" />
          <MessageCircle className="w-6 h-6 text-gray-700 cursor-pointer" />
          <Share className="w-6 h-6 text-gray-700 cursor-pointer" />
        </div>

        <p className="font-semibold text-sm text-gray-900 mb-1">{post.likes.toLocaleString()} likes</p>

        {post.caption && (
          <p className="text-sm text-gray-900">
            <span className="font-semibold mr-2">{post.username}</span>
            {post.caption}
          </p>
        )}

        <p className="text-xs text-gray-500 mt-2 uppercase">{post.timeAgo} ago</p>
      </div>
    </div>
  )
}

const TwitterPost = ({ post }: { post: SocialMediaPost }) => {
  const getTwitterAvatar = (username: string) => {
    const avatarMap: { [key: string]: string } = {
      techguru: "/avatar-8.png",
      uxdesigner: "/avatar-9.png",
      startuplife: "/avatar-10.png",
      airesearcher: "/avatar-11.png",
      productmanager: "/avatar-12.png",
      cloudnative: "/avatar-13.png",
    }
    return avatarMap[username] || "/avatar-8.png"
  }

  return (
    <div className="w-96 rounded-xl shadow-lg p-4 border border-gray-200" style={{ backgroundColor: "#dbeafe" }}>
      <div className="flex space-x-3">
        <img
          src={getTwitterAvatar(post.username) || "/placeholder.svg"}
          alt={post.username}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <p className="font-bold text-gray-900">{post.username}</p>
            <p className="text-gray-500 text-sm">{post.handle}</p>
            <span className="text-gray-500">·</span>
            <p className="text-gray-500 text-sm">{post.timeAgo}</p>
          </div>

          <p className="text-gray-900 mt-2 leading-relaxed">{post.content}</p>

          <div className="flex items-center justify-between mt-4 max-w-md">
            <div className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 cursor-pointer">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm">{post.comments || 0}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500 hover:text-green-500 cursor-pointer">
              <Repeat2 className="w-5 h-5" />
              <span className="text-sm">{post.retweets}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500 hover:text-red-500 cursor-pointer">
              <Heart className="w-5 h-5" />
              <span className="text-sm">{post.likes}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 cursor-pointer">
              <Share className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const LinkedInPost = ({ post }: { post: SocialMediaPost }) => {
  const getLinkedInAvatar = (username: string) => {
    const avatarMap: { [key: string]: string } = {
      "Sarah Johnson": "/avatar-14.png",
      "Michael Chen": "/avatar-15.png",
      "Emma Rodriguez": "/avatar-16.png",
      "Alex Thompson": "/avatar-17.png",
    }
    return avatarMap[username] || "/avatar-14.png"
  }

  return (
    <div className="w-96 rounded-lg shadow-lg border border-gray-200" style={{ backgroundColor: "#f3e8ff" }}>
      <div className="p-4">
        <div className="flex items-start space-x-3">
          <img
            src={getLinkedInAvatar(post.username) || "/placeholder.svg"}
            alt={post.username}
            className="w-12 h-12 rounded-full"
          />
          <div className="flex-1">
            <p className="font-semibold text-gray-900">{post.username}</p>
            {post.title && <p className="text-sm text-gray-600">{post.title}</p>}
            <p className="text-xs text-gray-500">{post.timeAgo} ago</p>
          </div>
          <MoreHorizontal className="w-5 h-5 text-gray-500" />
        </div>

        <p className="text-gray-900 mt-3 leading-relaxed">{post.content}</p>
      </div>

      <div className="border-t border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-4">
            <span>{post.likes} likes</span>
            <span>{post.comments} comments</span>
          </div>
        </div>

        <div className="flex items-center justify-around mt-3 pt-3 border-t border-gray-100">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 px-4 py-2 rounded">
            <Heart className="w-5 h-5" />
            <span>Like</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 px-4 py-2 rounded">
            <MessageCircle className="w-5 h-5" />
            <span>Comment</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 px-4 py-2 rounded">
            <Share className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  )
}

const FacebookPost = ({ post }: { post: SocialMediaPost }) => {
  const getFacebookAvatar = (username: string) => {
    const avatarMap: { [key: string]: string } = {
      "Innovation Hub": "/avatar-18.png",
      "Tech Community": "/avatar-19.png",
      "Design Collective": "/avatar-20.png",
    }
    return avatarMap[username] || "/avatar-18.png"
  }

  const getFacebookImage = (username: string) => {
    const imageMap: { [key: string]: string } = {
      "Innovation Hub": "/facebook-1.png",
      "Tech Community": "/facebook-2.png",
      "Design Collective": "/facebook-3.png",
    }
    return imageMap[username] || "/facebook-1.png"
  }

  return (
    <div className="w-96 bg-white rounded-lg shadow-lg border border-gray-200">
      <div className="p-4">
        <div className="flex items-center space-x-3 mb-3">
          <img
            src={getFacebookAvatar(post.username) || "/placeholder.svg"}
            alt={post.username}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <p className="font-semibold text-gray-900">{post.username}</p>
            <p className="text-xs text-gray-500">{post.timeAgo} ago</p>
          </div>
          <MoreHorizontal className="w-5 h-5 text-gray-500" />
        </div>

        <p className="text-gray-900 mb-3 leading-relaxed">{post.content}</p>

        {post.image && (
          <img
            src={getFacebookImage(post.username) || "/placeholder.svg"}
            alt="Post content"
            className="w-full h-48 object-cover rounded-lg"
          />
        )}
      </div>

      <div className="border-t border-gray-200 px-4 py-2">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>{post.likes} likes</span>
          <div className="flex space-x-4">
            <span>{post.comments} comments</span>
            <span>{post.shares} shares</span>
          </div>
        </div>

        <div className="flex items-center justify-around pt-2 border-t border-gray-100">
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 px-4 py-2 rounded">
            <Heart className="w-5 h-5" />
            <span>Like</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 px-4 py-2 rounded">
            <MessageCircle className="w-5 h-5" />
            <span>Comment</span>
          </button>
          <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 px-4 py-2 rounded">
            <Share className="w-5 h-5" />
            <span>Share</span>
          </button>
        </div>
      </div>
    </div>
  )
}
