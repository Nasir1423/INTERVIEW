# 面试题：你怎么理解 HTML 语义化？语义化有什么优点？

## 你怎么理解 HTML 语义化？

（语义化是什么）HTML 语义化要求开发者**尽量使用有意义的标签来组织网页**，而不是像 `div`、`span` 等无意义的标签，这里的意义就是语义。

（语义化的作用）通过使用语义化标签，开发者**在编写网页的同时，还传达了不同内容的特殊含义**。

（语义化举例）如 `header` 常用于定义**头部/顶部**、`nav` 常用于定义**网页导航**、`article` 常用于定义一篇**文章**、`section` 常用于定义**一节或一部分内容**、`aside` 常用于定义**侧边栏**、`footer` 常用于定义**底部**、`main` 常用于定义**主体**等等。

## 语义化有什么优点？

（对于开发者）语义化可以**使代码结构清晰**，从而可以使人快速理解网页中每个部分的内容。既提高了可读性，又增强了可维护性。

（对于 SEO）语义化可以**让搜索引擎更好地理解网页内容**，从而有利于提高网页在搜索结果中的排名。比如，同样的一篇文章，组织在 `article` 标签中，可以让搜索引擎知道这是一篇文章；如果组织在 `div` 中，则不利于搜索引擎的判断。

（对于残障人士）与对 SEO 的作用类似，语义化**有助于让屏幕阅读器更好地解释网页内容**，从而增强残障用户的使用体验。以苹果的 VoiceOver 举例，`header`、`nav`、`main`、`footer` 这样的语义化标签可以让 VoiceOver 快速定位到网页的不同部分；`article`、`sections`、`aside` 可以让 VoiceOver 更准确地解释和展示网页各部分的内容。语义化的标签既能提供结构上的信息（比如 `header` 表明是头部），也能提供功能上的信息（比如 `nav` 表明是导航栏）。

> 扩展：语义化标签还可以和 ARIA 规范（Accessible Rich Internet Application，丰富的互联网应用程序访问） 相结合，从而进一步**提高网页的可访问性**（意思是对残障人士更加友好）！
>
> 简单说说 ARIA：一组规范，旨在增强网页内容的可访问性，特别是对使用辅助技术（如屏幕阅读器）的用户。ARIA 的原理可以解释为：**添加特定属性，从而提供额外的语义信息**，从而使得辅助技术能更好理解和解释网页内容及其状态。ARIA 主要包括三个主要组件：**角色**（Roles）表明元素类型及其作用、**属性**（property）描述元素状态（数据）、**状态**（state）描述元素的动态变化的状态（布尔值）。此外，所有属性、状态都需要使用 `aria-xxx` 的形式。
>
> ```html
> <div role="button" aria-pressed="false">Click me</div>
> ```
>
> 以上信息使得 div 有了角色、状态信息。即按钮（角色）、没有被按下（状态）。