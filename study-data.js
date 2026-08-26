window.STUDY_DATA = {
  "material": {
    "title": "实操考试题库",
    "description": "人工智能训练师三级实操题Python代码练习",
    "category": "题库"
  },
  "modules": [
    {
      "id": "opencv_basics",
      "title": "OpenCV 图像基础",
      "icon": "EyeOutlined",
      "description": "掌握图像读取、属性查看、颜色空间转换、缩放",
      "knowledge": "# OpenCV 图像基础\n\n## 核心概念\n\n### 1. 图像读取\n```python\nimport cv2\nimg = cv2.imread('photo.jpg')  # 读取图像\n```\n- `cv2.imread()` 返回一个 NumPy 数组\n- 默认以 BGR 格式读取（不是 RGB！）\n\n### 2. 图像属性\n```python\nimg.shape   # (高度, 宽度, 通道数)\nimg.dtype   # 数据类型，通常是 uint8\nimg.shape[2]  # 通道数：3=彩色，2=灰度\n```\n\n### 3. 颜色空间转换\n```python\ngray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\nrgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)\n```\n\n### 4. 图像缩放\n```python\nresized = cv2.resize(img, (200, 200))\n```\n\n## 考试重点\n- img.shape 返回 (高, 宽, 通道)\n- cv2.resize 参数是 (宽, 高)，和 shape 相反！",
      "examples": [
        {
          "title": "读取图像并查看属性",
          "description": "用 cv2.imread 读取图像，打印 shape、dtype、通道数",
          "code_template": "import cv2\n\n# 读取图像\nimg = cv2.imread('photo.jpg')\n\n# 打印形状\nprint('Shape:', img.shape)\n\n# 打印数据类型\nprint('Dtype:', img.dtype)\n\n# 打印通道数\nprint('Channels:', img.shape[2])",
          "expected_output": "Shape: (100, 100, 3)\nDtype: uint8\nChannels: 3",
          "explanation": {
            "oneliner": "cv2.imread 就是把一张图片文件读到电脑内存里，变成一个数字矩阵，之后你才能对它做各种操作。",
            "analogy": "就像你从书架上取一本书放到桌上翻开——书架上的书（图片文件）你没法直接做笔记，必须先取下来（imread）放到桌上（内存变量），才能开始操作。",
            "elements": [
              {"name": "cv2.imread('photo.jpg')", "desc": "读取图片的函数", "plain": "把图片从硬盘搬进内存", "value": "读取了 photo.jpg"},
              {"name": "img", "desc": "变量，存读取结果", "plain": "搬进来之后放在哪里", "value": "一个数字矩阵"},
              {"name": "img.shape", "desc": "图像的形状", "plain": "这张图有多大、几层", "value": "(100, 100, 3)"},
              {"name": "img.dtype", "desc": "每个数字的类型", "plain": "每个格子用多大的盒子装", "value": "uint8"},
              {"name": "img.shape[2]", "desc": "取 shape 的第3个值", "plain": "颜色有几层", "value": "3 = 彩色"}
            ],
            "tables": [
              {
                "title": "shape 的三个数字",
                "headers": ["位置", "含义", "类比", "例子里的值"],
                "rows": [
                  ["shape[0]", "高度（有多少行像素）", "照片从上到下有几排点", "100"],
                  ["shape[1]", "宽度（有多少列像素）", "照片从左到右有几排点", "100"],
                  ["shape[2]", "通道数（颜色层数）", "每个点用几种颜色混合", "3 = 红+绿+蓝"]
                ]
              },
              {
                "title": "dtype 数据类型",
                "headers": ["类型", "意思", "范围", "为什么用它"],
                "rows": [
                  ["uint8", "无符号8位整数", "0~255", "每个像素颜色值刚好在0-255之间"]
                ]
              }
            ],
            "flow": ["import cv2 —— 导入 OpenCV 工具箱", "img = cv2.imread('photo.jpg') —— 把图片读进来存到 img", "print(img.shape) —— 问：矩阵多大？答：(100,100,3)", "print(img.dtype) —— 问：数字什么类型？答：uint8", "print(img.shape[2]) —— 问：颜色几层？答：3"],
            "summary": "imread 读图，shape 看大小，dtype 看类型，shape[2] 看颜色层数——这三个是查看任何图像信息的基本三件套。"
          }
        },
        {
          "title": "颜色空间转换",
          "description": "将彩色图像转为灰度图，再转回RGB",
          "code_template": "import cv2\n\nimg = cv2.imread('photo.jpg')\n\n# 转灰度\ngray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\nprint('Gray shape:', gray.shape)\n\n# 转RGB\nrgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)\nprint('RGB shape:', rgb.shape)",
          "expected_output": "Gray shape: (100, 100)\nRGB shape: (100, 100, 3)",
          "explanation": {
            "oneliner": "cvtColor 就是给图像「换一种颜色语言」——同一个图像，用不同的方式记录颜色。",
            "analogy": "就像同一道菜可以用中文写菜谱，也可以用英文写——内容一样，表达方式不同。BGR、RGB、灰度就是三种「颜色语言」。",
            "elements": [
              {"name": "cv2.cvtColor", "desc": "颜色空间转换函数", "plain": "翻译颜色格式的工具", "value": "cvtColor(图像, 转换方式)"},
              {"name": "COLOR_BGR2GRAY", "desc": "BGR转灰度", "plain": "从彩色变成黑白", "value": "3层颜色压成1层亮度"},
              {"name": "COLOR_BGR2RGB", "desc": "BGR转RGB", "plain": "换一下颜色顺序", "value": "OpenCV用BGR，其他都用RGB"}
            ],
            "tables": [
              {
                "title": "三种颜色格式对比",
                "headers": ["格式", "几层", "谁在用", "shape"],
                "rows": [
                  ["BGR", "3层", "OpenCV独有", "(100,100,3)"],
                  ["RGB", "3层", "Matplotlib、PIL等", "(100,100,3)"],
                  ["灰度", "1层", "边缘检测等场景", "(100,100)"]
                ]
              }
            ],
            "flow": ["img = cv2.imread(...) —— 读进来是BGR格式", "cvtColor(img, COLOR_BGR2GRAY) —— 3层压成1层，变成黑白", "cvtColor(img, COLOR_BGR2RGB) —— 只是把红蓝顺序颠倒"],
            "summary": "OpenCV 读图默认是 BGR，不是 RGB。显示前要转 RGB，处理前可能要转灰度——cvtColor 就是干这个的。"
          }
        },
        {
          "title": "图像缩放",
          "description": "将图像缩放到指定尺寸",
          "code_template": "import cv2\n\nimg = cv2.imread('photo.jpg')\nprint('Original:', img.shape)\n\n# 缩放到 50x50\nsmall = cv2.resize(img, (50, 50))\nprint('Resized:', small.shape)\n\n# 按比例放大2倍\nh, w = img.shape[:2]\nbig = cv2.resize(img, (w*2, h*2))\nprint('Enlarged:', big.shape)",
          "expected_output": "Original: (100, 100, 3)\nResized: (50, 50, 3)\nEnlarged: (200, 200, 3)",
          "explanation": {
            "oneliner": "cv2.resize 就是把图像放大或缩小到你想要的尺寸。",
            "analogy": "就像用手机捏合放大缩小照片——照片内容不变，只是像素点变多或变少了。",
            "elements": [
              {"name": "cv2.resize(img, (宽, 高))", "desc": "缩放函数", "plain": "指定新的宽和高", "value": "resize(img, (50, 50))"},
              {"name": "img.shape[:2]", "desc": "取前两个值", "plain": "拿到高度和宽度", "value": "h, w = img.shape[:2]"}
            ],
            "tables": [
              {
                "title": "resize 参数 vs shape 顺序",
                "headers": ["写法", "顺序", "例子"],
                "rows": [
                  ["img.shape", "高, 宽, 通道", "(100, 100, 3)"],
                  ["cv2.resize", "宽, 高", "(50, 50)"]
                ]
              }
            ],
            "flow": ["img.shape 拿到原始尺寸 (高, 宽, 通道)", "cv2.resize(img, (新宽, 新高)) 指定目标大小", "返回缩放后的新图像，原图不变"],
            "summary": "resize 参数是 (宽, 高)，shape 顺序是 (高, 宽, 通道)——这两个顺序相反，考试必考。"
          }
        }
      ],
      "exercises": [
        {
          "title": "获取图像信息",
          "description": "读取 photo.jpg，分别打印 shape、dtype 和通道数（shape[2]）",
          "code_template": "import cv2\n\nimg = cv2.imread('photo.jpg')\n\n# 请在下方填写代码\n# 1. 打印 shape\n\n# 2. 打印 dtype\n\n# 3. 打印通道数\n",
          "answer": "import cv2\n\nimg = cv2.imread('photo.jpg')\nprint(img.shape)\nprint(img.dtype)\nprint(img.shape[2])",
          "check_keywords": ["img.shape", "img.dtype", "img.shape[2]", "print"],
          "hint": "用 img.shape 获取形状，img.dtype 获取类型，img.shape[2] 获取通道数"
        },
        {
          "title": "灰度转换并查看维度",
          "description": "读取图像，转为灰度图，打印灰度图的 shape（应该是二维的）",
          "code_template": "import cv2\n\nimg = cv2.imread('photo.jpg')\n\n# 转灰度\n\n# 打印灰度图 shape\n",
          "answer": "import cv2\n\nimg = cv2.imread('photo.jpg')\ngray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)\nprint(gray.shape)",
          "check_keywords": ["cvtColor", "COLOR_BGR2GRAY", "gray.shape", "print"],
          "hint": "用 cv2.cvtColor(img, cv2.COLOR_BGR2GRAY) 转灰度"
        },
        {
          "title": "图像缩放",
          "description": "将图像缩放到 (200, 150) 的尺寸，打印新尺寸的 shape",
          "code_template": "import cv2\n\nimg = cv2.imread('photo.jpg')\n\n# 缩放到 (200, 150)\n\n# 打印 shape\n",
          "answer": "import cv2\n\nimg = cv2.imread('photo.jpg')\nresized = cv2.resize(img, (200, 150))\nprint(resized.shape)",
          "check_keywords": ["cv2.resize", "(200, 150)", "print"],
          "hint": "cv2.resize(img, (宽, 高))，注意参数顺序是宽在前"
        }
      ],
      "examQuestions": [
        {
          "title": "实考真题：图像属性",
          "description": "读取图像 photo.jpg，打印以下信息：\n1. 图像的 shape\n2. 图像的数据类型 dtype\n3. 图像的通道数",
          "code_template": "import cv2\n\nimg = cv2.imread('photo.jpg')\n\n# 请完成代码",
          "answer": "import cv2\n\nimg = cv2.imread('photo.jpg')\nprint(img.shape)\nprint(img.dtype)\nprint(img.shape[2])",
          "check_keywords": ["img.shape", "img.dtype", "img.shape[2]"]
        },
        {
          "title": "实考真题：图像缩放",
          "description": "读取 photo.jpg，将其缩放为宽300、高200，打印缩放后的 shape",
          "code_template": "import cv2\n\nimg = cv2.imread('photo.jpg')\n\n# 请完成代码",
          "answer": "import cv2\n\nimg = cv2.imread('photo.jpg')\nresized = cv2.resize(img, (300, 200))\nprint(resized.shape)",
          "check_keywords": ["cv2.resize", "300", "200", "print"]
        }
      ]
    },
    {
      "id": "image_preprocessing",
      "title": "图像预处理",
      "icon": "ThunderboltOutlined",
      "description": "掌握锐化、模糊、亮度调整、噪声添加",
      "knowledge": "# 图像预处理\n\n## 核心函数\n\n### 1. 锐化（filter2D）\n```python\nkernel = np.array([[-1,-1,-1],[-1, 9,-1],[-1,-1,-1]])\nsharpened = cv2.filter2D(img, -1, kernel)\n```\n\n### 2. 高斯模糊（GaussianBlur）\n```python\nblurred = cv2.GaussianBlur(img, (5, 5), 0)\n```\n\n### 3. 亮度调整（convertScaleAbs）\n```python\nbright = cv2.convertScaleAbs(img, alpha=1.5, beta=50)\n```\n\n### 4. 添加噪声\n```python\nnoise = np.random.uniform(-30, 30, img.shape)\nnoisy = np.clip(img + noise, 0, 255)\n```",
      "examples": [
        {
          "title": "图像锐化",
          "description": "用 filter2D 和锐化核对图像做锐化处理",
          "code_template": "import cv2\nimport numpy as np\n\nimg = cv2.imread('photo.jpg')\n\n# 定义锐化核\nkernel = np.array([[-1,-1,-1],\n                   [-1, 9,-1],\n                   [-1,-1,-1]])\n\n# 锐化\nsharpened = cv2.filter2D(img, -1, kernel)\nprint('Original shape:', img.shape)\nprint('Sharpened shape:', sharpened.shape)\nprint('锐化完成')",
          "expected_output": "Original shape: (100, 100, 3)\nSharpened shape: (100, 100, 3)\n锐化完成",
          "explanation": {
            "oneliner": "filter2D 就是用一个小窗口（卷积核）在图像上滑动，对每个位置做加权计算，让图像变得更清晰或更模糊。",
            "analogy": "想象你透过一个3x3的格子看图像——格子中间那个格子权重最大（9），周围8个格子权重是-1。这相当于「重点看中间，忽略周围」，差异被放大了，所以边缘更清晰。",
            "elements": [
              {"name": "cv2.filter2D", "desc": "卷积函数", "plain": "用一个小窗口在图像上滑动做计算", "value": "filter2D(图像, -1, 核)"},
              {"name": "kernel / 卷积核", "desc": "3x3的数字矩阵", "plain": "那个小窗口里的权重", "value": "中心9，周围-1"},
              {"name": "np.array", "desc": "创建数组", "plain": "把数字列表变成矩阵", "value": "np.array([[...]])"}
            ],
            "tables": [
              {
                "title": "锐化核的数字含义",
                "headers": ["位置", "值", "作用"],
                "rows": [
                  ["中心", "9", "放大当前像素的权重"],
                  ["周围8格", "-1", "减去周围像素的权重"],
                  ["效果", "中心-周围", "差异被放大，边缘更清晰"]
                ]
              },
              {
                "title": "常见卷积核对比",
                "headers": ["用途", "核的特征", "效果"],
                "rows": [
                  ["锐化", "中心大(9)，周围负(-1)", "边缘更清晰"],
                  ["模糊", "都是正数，加起来=1", "图像变模糊"],
                  ["边缘检测", "中心正，周围负，加起来=0", "只保留边缘"]
                ]
              }
            ],
            "flow": ["定义卷积核 kernel —— 一个3x3的权重矩阵", "filter2D(img, -1, kernel) —— 核在图像上滑动", "每个位置：周围像素 加权求和 = 新像素值", "输出：边缘被强调的锐化图像"],
            "summary": "filter2D 的本质是「加权平均」——锐化核的中心权重远大于周围，所以像素和周围差异大的地方（边缘）会被放大。"
          }
        },
        {
          "title": "高斯模糊",
          "description": "对图像做不同强度的高斯模糊",
          "code_template": "import cv2\n\nimg = cv2.imread('photo.jpg')\n\n# 轻度模糊\nlight = cv2.GaussianBlur(img, (3, 3), 0)\nprint('Light blur shape:', light.shape)\n\n# 重度模糊\nheavy = cv2.GaussianBlur(img, (15, 15), 0)\nprint('Heavy blur shape:', heavy.shape)",
          "expected_output": "Light blur shape: (100, 100, 3)\nHeavy blur shape: (100, 100, 3)",
          "explanation": {
            "oneliner": "GaussianBlur 就是对图像做「高斯加权平均」，让图像变得模糊——核越大，模糊越强。",
            "analogy": "就像你透过毛玻璃看东西——玻璃越厚（核越大），看到的越模糊。轻度模糊像薄纱，重度模糊像磨砂玻璃。",
            "elements": [
              {"name": "cv2.GaussianBlur", "desc": "高斯模糊函数", "plain": "用高斯权重做模糊", "value": "GaussianBlur(图像, 核大小, 0)"},
              {"name": "(3, 3)", "desc": "核大小", "plain": "模糊窗口多大", "value": "必须是奇数"},
              {"name": "(15, 15)", "desc": "更大的核", "plain": "窗口更大，模糊更强", "value": "重度模糊"}
            ],
            "tables": [
              {
                "title": "核大小 vs 模糊程度",
                "headers": ["核大小", "模糊程度", "类比"],
                "rows": [
                  ["(3, 3)", "轻微模糊", "薄纱"],
                  ["(5, 5)", "中度模糊", "磨砂玻璃"],
                  ["(15, 15)", "重度模糊", "完全看不清"]
                ]
              }
            ],
            "flow": ["指定核大小 (ksize, ksize)", "高斯权重在图像上滑动", "每个像素被周围像素的加权平均替代", "核越大，参与平均的范围越大，越模糊"],
            "summary": "GaussianBlur 核大小必须是奇数——(3,3) 轻模糊，(15,15) 重模糊。考试常考参数格式。"
          }
        },
        {
          "title": "亮度调整",
          "description": "增加和降低图像亮度",
          "code_template": "import cv2\n\nimg = cv2.imread('photo.jpg')\n\n# 增加亮度\nbright = cv2.convertScaleAbs(img, alpha=1.5, beta=50)\nprint('Bright shape:', bright.shape)\nprint('Bright dtype:', bright.dtype)\n\n# 降低亮度\ndark = cv2.convertScaleAbs(img, alpha=0.5, beta=-30)\nprint('Dark shape:', dark.shape)",
          "expected_output": "Bright shape: (100, 100, 3)\nBright dtype: uint8\nDark shape: (100, 100, 3)",
          "explanation": {
            "oneliner": "convertScaleAbs 就是对每个像素做「乘以alpha再加beta」的运算，控制对比度和亮度。",
            "analogy": "alpha 是「对比度旋钮」——拧大了明暗差距拉大；beta 是「亮度旋钮」——加正数整体变亮，加负数整体变暗。",
            "elements": [
              {"name": "alpha", "desc": "对比度系数", "plain": "像素值乘以多少", "value": "1.5 = 对比度提高50%"},
              {"name": "beta", "desc": "亮度增量", "plain": "像素值加多少", "value": "50 = 整体变亮"},
              {"name": "convertScaleAbs", "desc": "公式: alpha*像素+beta", "plain": "乘加运算后取绝对值", "value": "自动限制在0-255"}
            ],
            "tables": [
              {
                "title": "alpha 和 beta 的效果",
                "headers": ["参数", "值", "效果"],
                "rows": [
                  ["alpha", "1.0", "对比度不变"],
                  ["alpha", "1.5", "对比度提高，明暗差距拉大"],
                  ["alpha", "0.5", "对比度降低，画面发灰"],
                  ["beta", "50", "整体变亮"],
                  ["beta", "-30", "整体变暗"]
                ]
              }
            ],
            "flow": ["对每个像素执行: new = alpha * old + beta", "结果取绝对值", "自动截断到 0-255 范围", "输出: 亮度/对比度调整后的图像"],
            "summary": "alpha 控对比度（乘），beta 控亮度（加）——公式就是 alpha*像素+beta，考试记住这个就行。"
          }
        }
      ],
      "exercises": [
        {
          "title": "锐化处理",
          "description": "对 photo.jpg 做锐化处理：定义锐化核 np.array([[-1,-1,-1],[-1,9,-1],[-1,-1,-1]])，用 cv2.filter2D 处理图像",
          "code_template": "import cv2\nimport numpy as np\n\nimg = cv2.imread('photo.jpg')\n\n# 定义锐化核\n\n# 用 filter2D 锐化\n\n# 打印结果 shape\n",
          "answer": "import cv2\nimport numpy as np\n\nimg = cv2.imread('photo.jpg')\nkernel = np.array([[-1,-1,-1],[-1,9,-1],[-1,-1,-1]])\nresult = cv2.filter2D(img, -1, kernel)\nprint(result.shape)",
          "check_keywords": ["np.array", "filter2D", "-1, 9, -1"],
          "hint": "锐化核中心是9，周围都是-1"
        },
        {
          "title": "添加噪声",
          "description": "给图像添加随机噪声：用 np.random.uniform(-30, 30, img.shape) 生成噪声，加到图像上，用 np.clip 限制在0-255",
          "code_template": "import cv2\nimport numpy as np\n\nimg = cv2.imread('photo.jpg')\n\n# 生成噪声\n\n# 添加噪声并 clip\n\n# 打印结果 dtype\n",
          "answer": "import cv2\nimport numpy as np\n\nimg = cv2.imread('photo.jpg')\nnoise = np.random.uniform(-30, 30, img.shape).astype(np.float64)\nresult = np.clip(img.astype(np.float64) + noise, 0, 255).astype(np.uint8)\nprint(result.dtype)",
          "check_keywords": ["np.random.uniform", "np.clip", "255"],
          "hint": "先生成 uniform 噪声，加到图像上，再 clip 到 0-255"
        },
        {
          "title": "亮度调整",
          "description": "将图像亮度提高：alpha=1.3, beta=40，用 cv2.convertScaleAbs",
          "code_template": "import cv2\n\nimg = cv2.imread('photo.jpg')\n\n# 调整亮度\n\n# 打印结果\n",
          "answer": "import cv2\n\nimg = cv2.imread('photo.jpg')\nbright = cv2.convertScaleAbs(img, alpha=1.3, beta=40)\nprint(bright.shape)\nprint(bright.dtype)",
          "check_keywords": ["convertScaleAbs", "alpha", "beta"],
          "hint": "cv2.convertScaleAbs(img, alpha=1.3, beta=40)"
        }
      ],
      "examQuestions": [
        {
          "title": "实考真题：图像锐化",
          "description": "读取 photo.jpg，使用 filter2D 和锐化核进行锐化处理，打印处理后的 shape",
          "code_template": "import cv2\nimport numpy as np\n\nimg = cv2.imread('photo.jpg')\n\n# 请完成代码",
          "answer": "import cv2\nimport numpy as np\n\nimg = cv2.imread('photo.jpg')\nkernel = np.array([[-1,-1,-1],[-1,9,-1],[-1,-1,-1]])\nresult = cv2.filter2D(img, -1, kernel)\nprint(result.shape)",
          "check_keywords": ["filter2D", "np.array", "-1", "9"]
        },
        {
          "title": "实考真题：高斯模糊",
          "description": "读取 photo.jpg，用 (7,7) 核做高斯模糊，打印模糊后的 shape",
          "code_template": "import cv2\n\nimg = cv2.imread('photo.jpg')\n\n# 请完成代码",
          "answer": "import cv2\n\nimg = cv2.imread('photo.jpg')\nblurred = cv2.GaussianBlur(img, (7, 7), 0)\nprint(blurred.shape)",
          "check_keywords": ["GaussianBlur", "(7, 7)", "print"]
        }
      ]
    },
    {
      "id": "matplotlib_display",
      "title": "Matplotlib 图像显示",
      "icon": "BarChartOutlined",
      "description": "掌握图像显示、子图、标题设置、归一化",
      "knowledge": "# Matplotlib 图像显示\n\n## 核心概念\n\n### 1. 基本显示\n```python\nimport matplotlib.pyplot as plt\nrgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)\nplt.imshow(rgb)\nplt.title('My Image')\nplt.axis('off')\n```\n\n### 2. 归一化\n```python\nnormalized = img.astype('float32') / 255.0\n```\n\n### 3. 子图\n```python\nfig, axes = plt.subplots(1, 2)\n```",
      "examples": [
        {
          "title": "基本图像显示",
          "description": "读取图像、转RGB、用matplotlib显示",
          "code_template": "import cv2\nimport matplotlib.pyplot as plt\n\nimg = cv2.imread('photo.jpg')\nrgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)\n\nplt.figure(figsize=(6, 6))\nplt.imshow(rgb)\nplt.title('Test Image')\nplt.axis('off')\nprint('图像显示准备完成')\nprint('RGB shape:', rgb.shape)",
          "expected_output": "图像显示准备完成\nRGB shape: (100, 100, 3)",
          "explanation": {
            "oneliner": "plt.imshow 就是把数字矩阵「画」成你能看到的图像——前提是颜色格式要对（RGB）。",
            "analogy": "plt.imshow 是「画家」，数字矩阵是「颜料配方」。画家只认 RGB 配方，你给他 BGR 他就画反了（红蓝颠倒）。所以先用 cvtColor 转成 RGB 再给他。",
            "elements": [
              {"name": "plt.imshow(rgb)", "desc": "显示图像", "plain": "把矩阵画成图", "value": "必须是RGB格式"},
              {"name": "plt.title('...')", "desc": "设置标题", "plain": "给图像加个标题", "value": "标题文字"},
              {"name": "plt.axis('off')", "desc": "隐藏坐标轴", "plain": "不显示XY轴数字", "value": "让图像更干净"},
              {"name": "plt.figure(figsize)", "desc": "设置画布大小", "plain": "图像多大", "value": "(6,6) 英寸"}
            ],
            "tables": [
              {
                "title": "显示图像的完整流程",
                "headers": ["步骤", "代码", "作用"],
                "rows": [
                  ["1. 读图", "cv2.imread()", "读进来是BGR格式"],
                  ["2. 转格式", "cvtColor(BGR2RGB)", "转成matplotlib能认的RGB"],
                  ["3. 画图", "plt.imshow(rgb)", "把矩阵画成图像"],
                  ["4. 装饰", "title + axis('off')", "加标题、去坐标轴"]
                ]
              }
            ],
            "flow": ["cv2.imread 读图（BGR）", "cvtColor 转 RGB", "plt.imshow 画图", "plt.title 加标题", "plt.axis('off') 去坐标轴"],
            "summary": "OpenCV 读图是 BGR，matplotlib 显示要 RGB——不转的话红蓝会颠倒。axis('off') 去掉坐标轴让画面干净。"
          }
        },
        {
          "title": "归一化显示",
          "description": "将像素值归一化到 0-1 范围",
          "code_template": "import cv2\nimport numpy as np\nimport matplotlib.pyplot as plt\n\nimg = cv2.imread('photo.jpg')\n\n# 归一化\nnormalized = img.astype('float32') / 255.0\nprint('归一化前 dtype:', img.dtype)\nprint('归一化后 dtype:', normalized.dtype)\nprint('最大值:', normalized.max())\nprint('最小值:', normalized.min())",
          "expected_output": "归一化前 dtype: uint8\n归一化后 dtype: float32\n最大值: 1.0\n最小值: 0.0",
          "explanation": {
            "oneliner": "归一化就是把像素值从 0-255 的范围压缩到 0-1 的范围——除以 255 就行了。",
            "analogy": "就像把「满分100分的考试成绩」换算成「满分1分的小数」——90分变成0.9，50分变成0.5。内容没变，只是表达方式变了。",
            "elements": [
              {"name": "img.astype('float32')", "desc": "转换数据类型", "plain": "先把整数变成小数", "value": "否则整数除法会丢失精度"},
              {"name": "/ 255.0", "desc": "除以255", "plain": "把0-255压缩到0-1", "value": "这就是归一化"},
              {"name": ".max() / .min()", "desc": "求最大最小值", "plain": "看看范围对不对", "value": "应该是1.0和0.0"}
            ],
            "tables": [
              {
                "title": "归一化前后对比",
                "headers": ["属性", "归一化前", "归一化后"],
                "rows": [
                  ["dtype", "uint8", "float32"],
                  ["范围", "0 ~ 255", "0.0 ~ 1.0"],
                  ["黑色像素", "0", "0.0"],
                  ["白色像素", "255", "1.0"],
                  ["用途", "存储", "计算、深度学习"]
                ]
              }
            ],
            "flow": ["astype('float32') —— 整数转小数", "/ 255.0 —— 压缩到0-1范围", "结果: float32 类型，值在 0.0~1.0"],
            "summary": "归一化 = astype('float32') / 255.0——把 0-255 变成 0-1，深度学习和很多计算都要求这个格式。"
          }
        }
      ],
      "exercises": [
        {
          "title": "图像显示准备",
          "description": "读取 photo.jpg，转为 RGB 格式，设置标题为 'My Photo'，隐藏坐标轴",
          "code_template": "import cv2\nimport matplotlib.pyplot as plt\n\nimg = cv2.imread('photo.jpg')\n\n# 转 RGB\n\n# 设置标题\n\n# 隐藏坐标轴\n\nprint('准备完成')",
          "answer": "import cv2\nimport matplotlib.pyplot as plt\n\nimg = cv2.imread('photo.jpg')\nrgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)\nplt.title('My Photo')\nplt.axis('off')\nprint('准备完成')",
          "check_keywords": ["cvtColor", "COLOR_BGR2RGB", "plt.title", "plt.axis"],
          "hint": "BGR转RGB用 cvtColor，隐藏坐标轴用 plt.axis('off')"
        },
        {
          "title": "像素归一化",
          "description": "读取图像，将像素值除以255归一化到0-1，打印归一化后的最大值",
          "code_template": "import cv2\nimport numpy as np\n\nimg = cv2.imread('photo.jpg')\n\n# 归一化\n\n# 打印最大值\n",
          "answer": "import cv2\nimport numpy as np\n\nimg = cv2.imread('photo.jpg')\nnormalized = img.astype('float32') / 255.0\nprint(normalized.max())",
          "check_keywords": ["/ 255", "astype", "max()"],
          "hint": "astype('float32') / 255.0"
        }
      ],
      "examQuestions": [
        {
          "title": "实考真题：图像显示",
          "description": "读取 photo.jpg，转为RGB，归一化到0-1，设置标题 'Photo'，隐藏坐标轴，打印归一化后的 dtype",
          "code_template": "import cv2\nimport matplotlib.pyplot as plt\n\nimg = cv2.imread('photo.jpg')\n\n# 请完成代码",
          "answer": "import cv2\nimport matplotlib.pyplot as plt\n\nimg = cv2.imread('photo.jpg')\nrgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)\nnormalized = rgb.astype('float32') / 255.0\nplt.title('Photo')\nplt.axis('off')\nprint(normalized.dtype)",
          "check_keywords": ["cvtColor", "COLOR_BGR2RGB", "/ 255", "plt.title", "plt.axis"]
        }
      ]
    },
    {
      "id": "pandas_basics",
      "title": "Pandas 基础操作",
      "icon": "TableOutlined",
      "description": "掌握CSV读取、数据查看、列访问、条件筛选",
      "knowledge": "# Pandas 基础操作\n\n## 核心概念\n\n### 1. 读取 CSV\n```python\nimport pandas as pd\ndf = pd.read_csv('sample.csv')\nprint(df.head(10))\nprint(df.columns)\nprint(df.dtypes)\n```\n\n### 2. 列访问\n```python\ndf['姓名']           # 单列\ndf[['姓名', '年龄']]  # 多列\n```\n\n### 3. 条件筛选\n```python\ndf[df['年龄'] > 30]\ndf[(df['年龄'] > 25) & (df['评分'] > 4.0)]\n```",
      "examples": [
        {
          "title": "读取并查看数据",
          "description": "读取 CSV 文件，查看前几行和基本信息",
          "code_template": "import pandas as pd\n\ndf = pd.read_csv('sample.csv')\n\nprint('=== 前5行 ===')\nprint(df.head())\n\nprint('\\n=== 列名 ===')\nprint(df.columns.tolist())\n\nprint('\\n=== 数据类型 ===')\nprint(df.dtypes)\n\nprint('\\n=== 形状 ===')\nprint(df.shape)",
          "expected_output": "=== 前5行 ===\n   姓名  年龄  城市   评分       入职日期\n0  张三   28  北京  4.5   2020-03-15\n1  李四   35  上海  3.8  2019/06/20\n2  王五   22  广州  4.2   2021-01-10\n3  赵六   41  深圳  2.9  2018.11.05\n4  孙七   31  杭州  4.7   2020-08-22\n\n=== 列名 ===\n['姓名', '年龄', '城市', '评分', '入职日期']\n\n=== 数据类型 ===\n姓名       object\n年龄        int64\n城市       object\n评分      float64\n入职日期     object\ndtype: object\n\n=== 形状 ===\n(10, 5)",
          "explanation": {
            "oneliner": "pd.read_csv 就是把 CSV 文件读进来变成一个 DataFrame（表格对象），之后你才能用 Pandas 的各种功能操作它。",
            "analogy": "CSV 文件就像一张写在纸上的表格——你得先把它「扫描」进电脑（read_csv），变成电子表格（DataFrame），才能筛选、排序、计算。",
            "elements": [
              {"name": "pd.read_csv('文件名')", "desc": "读取CSV文件", "plain": "把纸上的表格扫进电脑", "value": "返回DataFrame"},
              {"name": "df.head(n)", "desc": "看前n行", "plain": "先瞄一眼表格长什么样", "value": "默认5行"},
              {"name": "df.columns", "desc": "列名", "plain": "每一列叫什么", "value": "['姓名','年龄',...]"},
              {"name": "df.dtypes", "desc": "数据类型", "plain": "每一列存的是什么类型", "value": "int64/float64/object"},
              {"name": "df.shape", "desc": "形状", "plain": "几行几列", "value": "(10, 5)"}
            ],
            "tables": [
              {
                "title": "常用数据类型",
                "headers": ["类型", "含义", "例子"],
                "rows": [
                  ["int64", "整数", "年龄: 28, 35"],
                  ["float64", "小数", "评分: 4.5, 3.8"],
                  ["object", "文本（字符串）", "姓名: '张三', 城市: '北京'"]
                ]
              },
              {
                "title": "查看数据的常用方法",
                "headers": ["方法", "作用", "例子"],
                "rows": [
                  ["df.head(n)", "看前n行", "df.head(10)"],
                  ["df.tail(n)", "看后n行", "df.tail(3)"],
                  ["df.shape", "几行几列", "(10, 5)"],
                  ["df.columns", "所有列名", "['姓名','年龄',...]"],
                  ["df.dtypes", "每列数据类型", "int64, object..."],
                  ["df.info()", "完整概览", "行数、列数、类型、缺失值"]
                ]
              }
            ],
            "flow": ["pd.read_csv('sample.csv') —— 读取CSV文件", "df.head() —— 先看前5行长什么样", "df.columns —— 看有哪些列", "df.dtypes —— 看每列是什么类型", "df.shape —— 看总共几行几列"],
            "summary": "read_csv 读文件，head 看数据，columns 看列名，dtypes 看类型，shape 看大小——这五个是打开任何 CSV 后的第一步。"
          }
        },
        {
          "title": "列访问和筛选",
          "description": "访问单列、多列，做条件筛选",
          "code_template": "import pandas as pd\n\ndf = pd.read_csv('sample.csv')\n\n# 单列访问\nprint('所有姓名:')\nprint(df['姓名'])\n\n# 条件筛选：年龄>30\nprint('\\n年龄>30的人:')\nprint(df[df['年龄'] > 30][['姓名', '年龄']])\n\n# 多条件筛选\nprint('\\n年龄>25 且评分>4.0:')\nfiltered = df[(df['年龄'] > 25) & (df['评分'] > 4.0)]\nprint(filtered[['姓名', '年龄', '评分']])",
          "expected_output": "所有姓名:\n0     张三\n1     李四\n2     王五\n3     赵六\n4     孙七\n5     周八\n6     吴九\n7     郑十\n8    钱十一\n9    陈十二\nName: 姓名, dtype: object\n\n年龄>30的人:\n   姓名  年龄\n1  李四   35\n3  赵六   41\n6  吴九   38\n8  钱十一  45\n\n年龄>25 且评分>4.0:\n    姓名  年龄   评分\n0   张三   28  4.5\n4   孙七   31  4.7\n8  钱十一  45  4.8",
          "explanation": {
            "oneliner": "df['列名'] 取一列，df[条件] 按条件筛选行——就像 Excel 里的筛选功能。",
            "analogy": "df 就像一本通讯录。df['姓名'] 是「只看姓名这一列」；df[df['年龄']>30] 是「只看年龄大于30的人」——就像你在通讯录上加了一个筛选器。",
            "elements": [
              {"name": "df['姓名']", "desc": "取单列", "plain": "只看姓名这一列", "value": "返回Series"},
              {"name": "df[['姓名','年龄']]", "desc": "取多列", "plain": "同时看两列", "value": "返回DataFrame"},
              {"name": "df[df['年龄'] > 30]", "desc": "条件筛选", "plain": "只保留年龄>30的行", "value": "布尔索引"},
              {"name": "& (与)", "desc": "同时满足", "plain": "并且", "value": "两个条件都要满足"},
              {"name": "| (或)", "desc": "满足其一", "plain": "或者", "value": "满足一个就行"}
            ],
            "tables": [
              {
                "title": "筛选写法对比",
                "headers": ["需求", "写法", "说明"],
                "rows": [
                  ["取单列", "df['姓名']", "方括号+列名"],
                  ["取多列", "df[['姓名','年龄']]", "双层方括号"],
                  ["单条件筛选", "df[df['年龄']>30]", "方括号+条件"],
                  ["多条件(且)", "df[(条件1) & (条件2)]", "用 & 连接"],
                  ["多条件(或)", "df[(条件1) | (条件2)]", "用 | 连接"]
                ]
              }
            ],
            "flow": ["df['列名'] —— 取出一列数据", "df[条件] —— 条件为 True 的行留下来", "多条件用 & (且) 或 | (或) 连接", "可以先筛选行，再选列: df[条件][['列1','列2']]"],
            "summary": "单括号取列，双括号取多列，方括号里放条件做筛选——多条件用 & 连接，记得每个条件加括号。"
          }
        }
      ],
      "exercises": [
        {
          "title": "读取CSV并查看前10行",
          "description": "读取 sample.csv，打印前10行（head(10)）",
          "code_template": "import pandas as pd\n\n# 读取 CSV\n\n# 打印前10行\n",
          "answer": "import pandas as pd\ndf = pd.read_csv('sample.csv')\nprint(df.head(10))",
          "check_keywords": ["pd.read_csv", "head(10)", "print"],
          "hint": "pd.read_csv('sample.csv') 读取，df.head(10) 取前10行"
        },
        {
          "title": "访问特定列",
          "description": "读取 sample.csv，打印所有人的姓名和年龄列",
          "code_template": "import pandas as pd\n\ndf = pd.read_csv('sample.csv')\n\n# 打印姓名和年龄\n",
          "answer": "import pandas as pd\ndf = pd.read_csv('sample.csv')\nprint(df[['姓名', '年龄']])",
          "check_keywords": ["[['姓名', '年龄']]", "print"],
          "hint": "用 df[['列1', '列2']] 访问多列"
        },
        {
          "title": "条件筛选",
          "description": "读取 sample.csv，筛选出评分 >= 3 的所有行并打印",
          "code_template": "import pandas as pd\n\ndf = pd.read_csv('sample.csv')\n\n# 筛选评分 >= 3\n\n# 打印结果\n",
          "answer": "import pandas as pd\ndf = pd.read_csv('sample.csv')\nprint(df[df['评分'] >= 3])",
          "check_keywords": ["df['评分'] >= 3", "print"],
          "hint": "用 df[df['评分'] >= 3] 做布尔筛选"
        }
      ],
      "examQuestions": [
        {
          "title": "实考真题：CSV读取与查看",
          "description": "读取 sample.csv，打印：1. 前5行 2. 列名 3. 数据类型",
          "code_template": "import pandas as pd\n\n# 请完成代码",
          "answer": "import pandas as pd\ndf = pd.read_csv('sample.csv')\nprint(df.head())\nprint(df.columns)\nprint(df.dtypes)",
          "check_keywords": ["pd.read_csv", "head()", "columns", "dtypes"]
        },
        {
          "title": "实考真题：数据筛选",
          "description": "读取 sample.csv，筛选出年龄 > 30 的行，打印姓名和年龄",
          "code_template": "import pandas as pd\n\ndf = pd.read_csv('sample.csv')\n\n# 请完成代码",
          "answer": "import pandas as pd\ndf = pd.read_csv('sample.csv')\nprint(df[df['年龄'] > 30][['姓名', '年龄']])",
          "check_keywords": ["df['年龄'] > 30", "姓名", "年龄"]
        }
      ]
    },
    {
      "id": "pandas_cleaning",
      "title": "Pandas 数据清洗",
      "icon": "ClearOutlined",
      "description": "掌握日期格式统一、缺失值处理、apply函数",
      "knowledge": "# Pandas 数据清洗\n\n## 核心概念\n\n### 1. 日期格式统一\n```python\ndf['日期'] = df['日期'].str.replace('/', '-')\ndf['日期'] = pd.to_datetime(df['日期'])\ndf['日期'] = df['日期'].dt.strftime('%Y-%m-%d')\n```\n\n### 2. apply 函数\n```python\ndf['等级'] = df['评分'].apply(lambda x: '高' if x >= 4 else '低')\n```",
      "examples": [
        {
          "title": "日期格式统一",
          "description": "将不同格式的日期统一为 YYYY-MM-DD",
          "code_template": "import pandas as pd\n\ndf = pd.read_csv('sample_dates.csv')\nprint('清洗前:')\nprint(df['日期'])\n\n# 统一分隔符\ndf['日期'] = df['日期'].str.replace('/', '-')\ndf['日期'] = df['日期'].str.replace('.', '-')\n\n# 转为日期类型\ndf['日期'] = pd.to_datetime(df['日期'])\n\n# 格式化\ndf['日期'] = df['日期'].dt.strftime('%Y-%m-%d')\n\nprint('\\n清洗后:')\nprint(df['日期'])",
          "expected_output": "清洗前:\n0    2024-03-15\n1    2024/03/16\n2    2024.03.17\n3    2024-03-18\n4    2024/03/19\nName: 日期, dtype: object\n\n清洗后:\n0    2024-03-15\n1    2024-03-16\n2    2024-03-17\n3    2024-03-18\n4    2024-03-19\nName: 日期, dtype: object",
          "explanation": {
            "oneliner": "日期清洗就是把各种乱七八糟的日期格式（2024/03/16、2024.03.17）统一成一种格式（2024-03-16）。",
            "analogy": "就像你整理通讯录——有人写「138xxxx」，有人写「138-xxxx」，有人写「138 xxxx」。你得先把分隔符统一（都变成-），再统一格式。",
            "elements": [
              {"name": "str.replace('/', '-')", "desc": "字符串替换", "plain": "把斜杠换成横杠", "value": "'2024/03/16' -> '2024-03-16'"},
              {"name": "pd.to_datetime()", "desc": "转为日期类型", "plain": "让Pandas认识这是日期", "value": "字符串 -> 日期对象"},
              {"name": "dt.strftime('%Y-%m-%d')", "desc": "格式化输出", "plain": "按指定格式输出字符串", "value": "统一为 YYYY-MM-DD"}
            ],
            "tables": [
              {
                "title": "日期清洗三步走",
                "headers": ["步骤", "代码", "作用"],
                "rows": [
                  ["1. 统一分隔符", "str.replace('/', '-')", "把 / 和 . 都换成 -"],
                  ["2. 转日期类型", "pd.to_datetime()", "字符串变成日期对象"],
                  ["3. 格式化输出", "dt.strftime('%Y-%m-%d')", "统一输出格式"]
                ]
              },
              {
                "title": "strftime 格式符号",
                "headers": ["符号", "含义", "例子"],
                "rows": [
                  ["%Y", "四位年份", "2024"],
                  ["%m", "两位月份", "03"],
                  ["%d", "两位日期", "15"]
                ]
              }
            ],
            "flow": ["str.replace 统一分隔符（/ 和 . 都换成 -）", "pd.to_datetime 转成日期对象", "dt.strftime('%Y-%m-%d') 格式化输出"],
            "summary": "日期清洗三步：replace 统一分隔符 → to_datetime 转类型 → strftime 格式化。考试就考这三步。"
          }
        },
        {
          "title": "apply 函数使用",
          "description": "用 apply 对数据做变换",
          "code_template": "import pandas as pd\n\ndf = pd.read_csv('sample.csv')\n\n# 用 apply 添加评分等级\ndef rating_level(score):\n    if score >= 4.5:\n        return '优秀'\n    elif score >= 3.5:\n        return '良好'\n    else:\n        return '一般'\n\ndf['等级'] = df['评分'].apply(rating_level)\nprint(df[['姓名', '评分', '等级']])",
          "expected_output": "    姓名   评分  等级\n0   张三  4.5  优秀\n1   李四  3.8  良好\n2   王五  4.2  良好\n3   赵六  2.9  一般\n4   孙七  4.7  优秀\n5   周八  3.5  良好\n6   吴九  4.0  良好\n7   郑十  3.2  一般\n8  钱十一  4.8  优秀\n9  陈十二  3.6  良好",
          "explanation": {
            "oneliner": "apply 就是对每一行或每一列「批量执行同一个函数」——你定义规则，它自动对每条数据执行。",
            "analogy": "就像老师批改试卷——你定好评分规则（90分以上优秀，80分以上良好），然后 apply 就是「助教」，自动按规则给每个学生打等级。",
            "elements": [
              {"name": "df['评分'].apply(函数)", "desc": "对评分列的每个值执行函数", "plain": "逐行执行同一个操作", "value": "10个评分 -> 10个等级"},
              {"name": "lambda x: ...", "desc": "匿名函数（简写）", "plain": "一行搞定的小函数", "value": "lambda x: x+1"},
              {"name": "def 函数名(...)", "desc": "自定义函数（完整写法）", "plain": "多行逻辑用这种", "value": "def rating_level(score): ..."}
            ],
            "tables": [
              {
                "title": "apply 的两种写法",
                "headers": ["场景", "写法", "例子"],
                "rows": [
                  ["简单逻辑", "lambda", "df['加分'] = df['评分'].apply(lambda x: x+1)"],
                  ["复杂逻辑", "def + apply", "def level(s): ...  df['等级'] = df['评分'].apply(level)"]
                ]
              }
            ],
            "flow": ["定义函数（规则）", "df['新列'] = df['旧列'].apply(函数)", "Pandas 自动对每一行执行该函数", "结果存到新列"],
            "summary": "apply 就是「批量执行」——lambda 用于简单一行逻辑，def 用于复杂多行逻辑。考试常用 lambda。"
          }
        }
      ],
      "exercises": [
        {
          "title": "日期清洗",
          "description": "读取 sample_dates.csv，将日期列统一为 YYYY-MM-DD 格式并打印",
          "code_template": "import pandas as pd\n\ndf = pd.read_csv('sample_dates.csv')\n\n# 统一日期格式\n\n# 打印日期列\n",
          "answer": "import pandas as pd\ndf = pd.read_csv('sample_dates.csv')\ndf['日期'] = df['日期'].str.replace('/', '-')\ndf['日期'] = df['日期'].str.replace('.', '-')\ndf['日期'] = pd.to_datetime(df['日期']).dt.strftime('%Y-%m-%d')\nprint(df['日期'])",
          "check_keywords": ["str.replace", "to_datetime", "strftime", "%Y-%m-%d"],
          "hint": "先 replace 统一分隔符，再 to_datetime，最后 strftime 格式化"
        },
        {
          "title": "apply 变换",
          "description": "读取 sample.csv，用 lambda 给评分列加1分（上限5分），打印结果",
          "code_template": "import pandas as pd\n\ndf = pd.read_csv('sample.csv')\n\n# 用 apply 加分\n\n# 打印\n",
          "answer": "import pandas as pd\ndf = pd.read_csv('sample.csv')\ndf['加分后'] = df['评分'].apply(lambda x: min(x + 1, 5))\nprint(df[['姓名', '评分', '加分后']])",
          "check_keywords": ["apply", "lambda", "min"],
          "hint": "lambda x: min(x + 1, 5)"
        }
      ],
      "examQuestions": [
        {
          "title": "实考真题：日期清洗",
          "description": "读取 sample_dates.csv，将日期列统一为 YYYY-MM-DD 格式，打印清洗后的日期列",
          "code_template": "import pandas as pd\n\ndf = pd.read_csv('sample_dates.csv')\n\n# 请完成代码",
          "answer": "import pandas as pd\ndf = pd.read_csv('sample_dates.csv')\ndf['日期'] = df['日期'].str.replace('/', '-')\ndf['日期'] = df['日期'].str.replace('.', '-')\ndf['日期'] = pd.to_datetime(df['日期']).dt.strftime('%Y-%m-%d')\nprint(df['日期'])",
          "check_keywords": ["str.replace", "to_datetime", "strftime"]
        }
      ]
    },
    {
      "id": "sklearn_training",
      "title": "sklearn 模型训练",
      "icon": "RobotOutlined",
      "description": "掌握数据集划分、模型训练、预测、评估",
      "knowledge": "# sklearn 模型训练\n\n## 核心概念\n\n### 1. 数据集划分\n```python\nfrom sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n```\n\n### 2. 模型训练\n```python\nmodel = DecisionTreeClassifier()\nmodel.fit(X_train, y_train)\n```\n\n### 3. 预测与评估\n```python\ny_pred = model.predict(X_test)\nacc = accuracy_score(y_test, y_pred)\n```",
      "examples": [
        {
          "title": "完整训练流程",
          "description": "用 sklearn 完成数据划分、训练、预测、评估",
          "code_template": "from sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.metrics import accuracy_score\nimport numpy as np\n\n# 创建示例数据\nnp.random.seed(42)\nX = np.random.randn(100, 3)\ny = (X[:, 0] + X[:, 1] > 0).astype(int)\n\n# 划分数据集\nX_train, X_test, y_train, y_test = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)\nprint(f'训练集大小: {len(X_train)}')\nprint(f'测试集大小: {len(X_test)}')\n\n# 训练模型\nmodel = DecisionTreeClassifier()\nmodel.fit(X_train, y_train)\nprint('模型训练完成')\n\n# 预测并评估\ny_pred = model.predict(X_test)\nacc = accuracy_score(y_test, y_pred)\nprint(f'准确率: {acc:.2f}')",
          "expected_output": "训练集大小: 80\n测试集大小: 20\n模型训练完成\n准确率: 1.00",
          "explanation": {
            "oneliner": "sklearn 的模型训练就是：把数据分成训练集和测试集 → 用训练集教模型 → 用测试集考试 → 看准确率。",
            "analogy": "就像准备考试——你把练习题分成两堆：一堆用来平时练习（训练集），一堆用来模拟考试（测试集）。模型先「学」训练题，再用测试题检验学得怎么样。",
            "elements": [
              {"name": "train_test_split", "desc": "划分数据集", "plain": "把数据分成练习用和考试用", "value": "80%训练 + 20%测试"},
              {"name": "model.fit(X_train, y_train)", "desc": "训练模型", "plain": "用练习题教模型", "value": "模型学习规律"},
              {"name": "model.predict(X_test)", "desc": "预测", "plain": "模型做考试题", "value": "输出预测结果"},
              {"name": "accuracy_score", "desc": "计算准确率", "plain": "对了多少题 / 总题数", "value": "0~1之间"}
            ],
            "tables": [
              {
                "title": "四个返回值",
                "headers": ["变量", "含义", "类比"],
                "rows": [
                  ["X_train", "训练集的特征（题目）", "练习题"],
                  ["X_test", "测试集的特征（题目）", "考试题"],
                  ["y_train", "训练集的标签（答案）", "练习题的答案"],
                  ["y_test", "测试集的标签（答案）", "考试题的答案（用来对答案）"]
                ]
              },
              {
                "title": "关键参数",
                "headers": ["参数", "含义", "常用值"],
                "rows": [
                  ["test_size", "测试集占比", "0.2 = 20%做测试"],
                  ["random_state", "随机种子", "42（固定结果可复现）"]
                ]
              }
            ],
            "flow": ["train_test_split 划分数据（80%训练，20%测试）", "创建模型 model = DecisionTreeClassifier()", "model.fit(X_train, y_train) 训练", "model.predict(X_test) 预测", "accuracy_score(y_test, y_pred) 评估准确率"],
            "summary": "完整流程：split 划分 → fit 训练 → predict 预测 → accuracy_score 评估。考试就考这四步。"
          }
        }
      ],
      "exercises": [
        {
          "title": "数据集划分",
          "description": "用 train_test_split 将数据按 80/20 划分，打印训练集和测试集的大小",
          "code_template": "from sklearn.model_selection import train_test_split\nimport numpy as np\n\nX = np.random.randn(50, 2)\ny = np.random.randint(0, 2, 50)\n\n# 划分数据集\n\n# 打印大小\n",
          "answer": "from sklearn.model_selection import train_test_split\nimport numpy as np\n\nX = np.random.randn(50, 2)\ny = np.random.randint(0, 2, 50)\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nprint(len(X_train))\nprint(len(X_test))",
          "check_keywords": ["train_test_split", "test_size", "len"],
          "hint": "train_test_split(X, y, test_size=0.2, random_state=42)"
        },
        {
          "title": "模型训练与预测",
          "description": "训练一个 DecisionTreeClassifier，对测试集做预测，打印准确率",
          "code_template": "from sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.metrics import accuracy_score\nimport numpy as np\n\nnp.random.seed(42)\nX = np.random.randn(100, 3)\ny = (X[:, 0] > 0).astype(int)\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\n\n# 训练模型\n\n# 预测\n\n# 打印准确率\n",
          "answer": "from sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.metrics import accuracy_score\nimport numpy as np\n\nnp.random.seed(42)\nX = np.random.randn(100, 3)\ny = (X[:, 0] > 0).astype(int)\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nmodel = DecisionTreeClassifier()\nmodel.fit(X_train, y_train)\ny_pred = model.predict(X_test)\nprint(accuracy_score(y_test, y_pred))",
          "check_keywords": ["fit", "predict", "accuracy_score"],
          "hint": "model.fit(X_train, y_train) 训练，model.predict(X_test) 预测"
        }
      ],
      "examQuestions": [
        {
          "title": "实考真题：模型训练",
          "description": "用 train_test_split(test_size=0.2, random_state=42) 划分数据，训练 DecisionTreeClassifier，预测并打印准确率",
          "code_template": "from sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.metrics import accuracy_score\nimport numpy as np\n\nnp.random.seed(42)\nX = np.random.randn(100, 3)\ny = (X[:, 0] > 0).astype(int)\n\n# 请完成代码",
          "answer": "from sklearn.model_selection import train_test_split\nfrom sklearn.tree import DecisionTreeClassifier\nfrom sklearn.metrics import accuracy_score\nimport numpy as np\n\nnp.random.seed(42)\nX = np.random.randn(100, 3)\ny = (X[:, 0] > 0).astype(int)\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)\nmodel = DecisionTreeClassifier()\nmodel.fit(X_train, y_train)\ny_pred = model.predict(X_test)\nprint(accuracy_score(y_test, y_pred))",
          "check_keywords": ["train_test_split", "fit", "predict", "accuracy_score"]
        }
      ]
    },
    {
      "id": "aiml_chatbot",
      "title": "AIML 聊天机器人",
      "icon": "MessageOutlined",
      "description": "掌握 SimpleKernel 类的 learn 和 respond 方法",
      "knowledge": "# AIML 聊天机器人\n\n## 核心概念\n\n### SimpleKernel 类\n```python\nclass SimpleKernel:\n    def __init__(self):\n        self.patterns = {}\n    def learn(self, pattern, response):\n        self.patterns[pattern.lower()] = response\n    def respond(self, input_text):\n        text = input_text.lower().strip()\n        if text in self.patterns:\n            return self.patterns[text]\n        return '我不太理解你的问题'\n```",
      "examples": [
        {
          "title": "创建聊天机器人",
          "description": "创建 SimpleKernel 实例，学习多个问答对，测试回复",
          "code_template": "class SimpleKernel:\n    def __init__(self):\n        self.patterns = {}\n    \n    def learn(self, pattern, response):\n        self.patterns[pattern.lower()] = response\n    \n    def respond(self, input_text):\n        text = input_text.lower().strip()\n        if text in self.patterns:\n            return self.patterns[text]\n        return '我不太理解你的问题'\n\n# 创建机器人\nbot = SimpleKernel()\n\n# 学习问答对\nbot.learn('你好', '你好！我是AI助手')\nbot.learn('你叫什么', '我叫小智')\nbot.learn('今天星期几', '我不知道今天星期几')\n\n# 测试\nprint(bot.respond('你好'))\nprint(bot.respond('你叫什么'))\nprint(bot.respond('今天星期几'))\nprint(bot.respond('再见'))",
          "expected_output": "你好！我是AI助手\n我叫小智\n我不知道今天星期几\n我不太理解你的问题",
          "explanation": {
            "oneliner": "SimpleKernel 就是一个最简单的聊天机器人——你教它「问题→回答」的对应关系，它就能根据问题查表回答。",
            "analogy": "就像一本自动翻页的字典——你先往里面写「词条=释义」（learn），之后别人问一个词条，它自动翻到那一页给出释义（respond）。翻不到就说「我不知道」。",
            "elements": [
              {"name": "class SimpleKernel", "desc": "类的定义", "plain": "机器人的蓝图", "value": "定义了机器人有哪些能力"},
              {"name": "__init__", "desc": "初始化方法", "plain": "机器人出厂设置", "value": "创建空字典 patterns"},
              {"name": "self.patterns", "desc": "字典属性", "plain": "机器人的记忆本", "value": "存所有问答对"},
              {"name": "learn(问, 答)", "desc": "学习方法", "plain": "往记忆本里写一条", "value": "patterns['你好'] = '你好！'"},
              {"name": "respond(问)", "desc": "回答方法", "plain": "从记忆本里查", "value": "查到就回答，查不到就说不知道"}
            ],
            "tables": [
              {
                "title": "learn vs respond",
                "headers": ["方法", "作用", "输入", "输出"],
                "rows": [
                  ["learn(问, 答)", "教机器人", "问题+答案", "存入字典，无返回"],
                  ["respond(问)", "问机器人", "问题", "返回答案或默认回答"]
                ]
              },
              {
                "title": "大小写处理",
                "headers": ["输入", "处理后", "能否匹配"],
                "rows": [
                  ["'你好'", "'你好'", "能"],
                  ["'你好 '", "'你好'", "能（strip去空格）"],
                  ["'你好啊'", "无匹配", "不能（必须完全一致）"]
                ]
              }
            ],
            "flow": ["定义 SimpleKernel 类（含 learn 和 respond 方法）", "bot = SimpleKernel() 创建实例", "bot.learn('问题', '答案') 学习问答对", "bot.respond('问题') 查表回答"],
            "summary": "learn 往字典里存，respond 从字典里查——本质就是一个问答查表系统。考试重点是 learn 和 respond 的调用方式。"
          }
        }
      ],
      "exercises": [
        {
          "title": "创建问答机器人",
          "description": "创建 SimpleKernel，学习3个问答对（自己定义），测试 respond 方法",
          "code_template": "class SimpleKernel:\n    def __init__(self):\n        self.patterns = {}\n    \n    def learn(self, pattern, response):\n        self.patterns[pattern.lower()] = response\n    \n    def respond(self, input_text):\n        text = input_text.lower().strip()\n        if text in self.patterns:\n            return self.patterns[text]\n        return '我不太理解你的问题'\n\nbot = SimpleKernel()\n\n# 学习3个问答对\n\n# 测试回复\n",
          "answer": "class SimpleKernel:\n    def __init__(self):\n        self.patterns = {}\n    \n    def learn(self, pattern, response):\n        self.patterns[pattern.lower()] = response\n    \n    def respond(self, input_text):\n        text = input_text.lower().strip()\n        if text in self.patterns:\n            return self.patterns[text]\n        return '我不太理解你的问题'\n\nbot = SimpleKernel()\nbot.learn('hello', 'Hi there!')\nbot.learn('bye', 'Goodbye!')\nbot.learn('thanks', 'You are welcome!')\nprint(bot.respond('hello'))\nprint(bot.respond('bye'))\nprint(bot.respond('thanks'))",
          "check_keywords": ["learn", "respond", "SimpleKernel"],
          "hint": "bot.learn('问题', '回答') 学习，bot.respond('问题') 测试"
        }
      ],
      "examQuestions": [
        {
          "title": "实考真题：聊天机器人",
          "description": "创建 SimpleKernel 实例，学习以下问答对：\n- '天气' -> '今天天气晴朗'\n- '时间' -> '现在是下午3点'\n- '名字' -> '我叫AI助手'\n然后测试 respond('天气') 并打印结果",
          "code_template": "class SimpleKernel:\n    def __init__(self):\n        self.patterns = {}\n    \n    def learn(self, pattern, response):\n        self.patterns[pattern.lower()] = response\n    \n    def respond(self, input_text):\n        text = input_text.lower().strip()\n        if text in self.patterns:\n            return self.patterns[text]\n        return '我不太理解你的问题'\n\n# 请完成代码",
          "answer": "class SimpleKernel:\n    def __init__(self):\n        self.patterns = {}\n    \n    def learn(self, pattern, response):\n        self.patterns[pattern.lower()] = response\n    \n    def respond(self, input_text):\n        text = input_text.lower().strip()\n        if text in self.patterns:\n            return self.patterns[text]\n        return '我不太理解你的问题'\n\nbot = SimpleKernel()\nbot.learn('天气', '今天天气晴朗')\nbot.learn('时间', '现在是下午3点')\nbot.learn('名字', '我叫AI助手')\nprint(bot.respond('天气'))",
          "check_keywords": ["learn", "respond", "天气", "今天天气晴朗"]
        }
      ]
    }
  ]
}
;
