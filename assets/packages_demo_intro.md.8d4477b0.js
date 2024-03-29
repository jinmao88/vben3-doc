import{_ as s,o as a,c as n,a as l}from"./app.f71259a5.js";const h=JSON.parse('{"title":"介绍","description":"","frontmatter":{},"headers":[{"level":2,"title":"demo引用方式","slug":"demo引用方式","link":"#demo引用方式","children":[]},{"level":2,"title":"组件列表","slug":"组件列表","link":"#组件列表","children":[]}],"relativePath":"packages/demo/intro.md","lastUpdated":1711687098000}'),e={name:"packages/demo/intro.md"},o=l(`<h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-hidden="true">#</a></h1><p><code>demo</code>： Vben3 示例存放目录。</p><h2 id="demo引用方式" tabindex="-1">demo引用方式 <a class="header-anchor" href="#demo引用方式" aria-hidden="true">#</a></h2><p>Vben3 的示例demo存放在 <code>packages/demo</code> 目录下，先在 <code>router</code> 目录下注册路由，再通过ESM方式引入项目modules中。</p><h2 id="组件列表" tabindex="-1">组件列表 <a class="header-anchor" href="#组件列表" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">📁 demo</span></span>
<span class="line"><span style="color:#A6ACCD;">┣━━📁src</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── Account          </span><span style="color:#676E95;font-style:italic;">// 帐号列表组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── Analysis         </span><span style="color:#676E95;font-style:italic;">// 分析页组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── Basic            </span><span style="color:#676E95;font-style:italic;">// 基础页组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── Card             </span><span style="color:#676E95;font-style:italic;">// Card组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── Charts           </span><span style="color:#676E95;font-style:italic;">// 图表组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── CountTo          </span><span style="color:#676E95;font-style:italic;">// 计数组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── Department       </span><span style="color:#676E95;font-style:italic;">// 部门组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── Editor           </span><span style="color:#676E95;font-style:italic;">// 文本编辑器组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── Form             </span><span style="color:#676E95;font-style:italic;">// 表单组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── Menu             </span><span style="color:#676E95;font-style:italic;">// 菜单组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── Modal            </span><span style="color:#676E95;font-style:italic;">// Modal弹框组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── Password         </span><span style="color:#676E95;font-style:italic;">// 密码组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── QrCode           </span><span style="color:#676E95;font-style:italic;">// 二维码组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── Role             </span><span style="color:#676E95;font-style:italic;">// 角色管理组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── Scroll           </span><span style="color:#676E95;font-style:italic;">// 滚动条组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── Table            </span><span style="color:#676E95;font-style:italic;">// table组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── Time             </span><span style="color:#676E95;font-style:italic;">// 时间组件</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── Workbench        </span><span style="color:#676E95;font-style:italic;">// 工作台首页</span></span>
<span class="line"></span></code></pre></div>`,6),t=[o];function p(c,i,r,d,y,C){return a(),n("div",null,t)}const f=s(e,[["render",p]]);export{h as __pageData,f as default};
