import{_ as s,o as a,c as n,a as l}from"./app.8a97897d.js";const A=JSON.parse('{"title":"I18n 国际化","description":"","frontmatter":{},"headers":[{"level":2,"title":"🕸️目录组织","slug":"🕸️目录组织","link":"#🕸️目录组织","children":[]},{"level":2,"title":"🧩依赖安装","slug":"🧩依赖安装","link":"#🧩依赖安装","children":[]},{"level":2,"title":"🔥快速使用","slug":"🔥快速使用","link":"#🔥快速使用","children":[{"level":3,"title":"1. 路由菜单使用","slug":"_1-路由菜单使用","link":"#_1-路由菜单使用","children":[]},{"level":3,"title":"2. 页面模块使用","slug":"_2-页面模块使用","link":"#_2-页面模块使用","children":[]}]},{"level":2,"title":"📃更多功能","slug":"📃更多功能","link":"#📃更多功能","children":[{"level":3,"title":"调整默认配置","slug":"调整默认配置","link":"#调整默认配置","children":[]},{"level":3,"title":"手动切换某个页面的语言","slug":"手动切换某个页面的语言","link":"#手动切换某个页面的语言","children":[]},{"level":3,"title":"新增语言配置","slug":"新增语言配置","link":"#新增语言配置","children":[]}]},{"level":2,"title":"✨优化体验","slug":"✨优化体验","link":"#✨优化体验","children":[]}],"relativePath":"packages/locale/intro.md","lastUpdated":1709870138000}'),p={name:"packages/locale/intro.md"},o=l(`<h1 id="i18n-国际化" tabindex="-1">I18n 国际化 <a class="header-anchor" href="#i18n-国际化" aria-hidden="true">#</a></h1><p>在软件开发过程中，如果有向海外市场拓展的需求，就必须得进行国际化配置，例如多语言环境配置。</p><p><code>locale</code> 目录是存放国际化配置的标准目录。</p><h2 id="🕸️目录组织" tabindex="-1">🕸️目录组织 <a class="header-anchor" href="#🕸️目录组织" aria-hidden="true">#</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">📁 locale</span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── 📁src</span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">    └── 📁lang</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;">// 多语言</span></span>
<span class="line"><span style="color:#A6ACCD;">          └── 📁en</span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">          └── 📁zh</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">CN</span><span style="color:#89DDFF;">/</span></span>
<span class="line"><span style="color:#A6ACCD;">    └── config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">    └── helper</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">    └── setup</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">i18n</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">    └── store</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">    └── use</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">i18n</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"><span style="color:#A6ACCD;">    └── use</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">locale</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"></span></code></pre></div><h2 id="🧩依赖安装" tabindex="-1">🧩依赖安装 <a class="header-anchor" href="#🧩依赖安装" aria-hidden="true">#</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-OLvKx" id="tab-kMs57v4" checked="checked"><label for="tab-kMs57v4">pnpm</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vue-i18n@</span><span style="color:#F78C6C;">9</span></span>
<span class="line"></span></code></pre></div></div></div><h2 id="🔥快速使用" tabindex="-1">🔥快速使用 <a class="header-anchor" href="#🔥快速使用" aria-hidden="true">#</a></h2><h3 id="_1-路由菜单使用" tabindex="-1">1. 路由菜单使用 <a class="header-anchor" href="#_1-路由菜单使用" aria-hidden="true">#</a></h3><p>首先，进入 <code>packages/locale/src/lang/</code> 目录的 <code>en</code> 和 <code>zh-CN</code> 目录下，在 <code>routes.ts</code> 文件中定义中文和英文的菜单名:</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-kAJKa" id="tab-TI2Ke9c" checked="checked"><label for="tab-TI2Ke9c">/en/routes.ts</label><input type="radio" name="group-kAJKa" id="tab-Q7dAEdI"><label for="tab-Q7dAEdI">/zh-CN/routes.ts</label></div><div class="blocks"><div class="language-ts active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">base</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">login</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Login</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">lock</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">LockScreen</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">base</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">login</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">登录</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">lock</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">锁屏</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">//...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></div></div><p>然后，在路由文件 <code>router/src/routes/</code>下创建modules.ts进行引用。</p><p>我们定义了 <code>t()</code> 函数对路由菜单进行多语言参数转换。其它模块使用 <code>useI18n</code> hooks即可。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight has-highlighted-lines"><code><span class="line"><span style="color:#676E95;font-style:italic;">// modules.ts</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 1. 引入 t() 函数</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">t</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@vben/locale</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 2. 定义路由</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> LOGIN_ROUTE</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RouteRecordItem</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/login</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Login</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/pages/sys/login/login.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">t</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">routes.basic.login</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> LOCK_SCREEN_ROUTE</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RouteRecordItem</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">path</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/lock</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Lock</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">component</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@/pages/sys/lock/index.vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">t</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">routes.basic.lock</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="_2-页面模块使用" tabindex="-1">2. 页面模块使用 <a class="header-anchor" href="#_2-页面模块使用" aria-hidden="true">#</a></h3><p>首先，在 <code>lang</code>目录下创建或定义指定的值👇</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-Vrf_l" id="tab-H9T8Z9A" checked="checked"><label for="tab-H9T8Z9A">en/modules.ts</label><input type="radio" name="group-Vrf_l" id="tab-1CXq2Dy"><label for="tab-1CXq2Dy">zh-CN/modules.ts</label></div><div class="blocks"><div class="language-ts active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">the quick brown fox jumps over the lazy dog.</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">test</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">一只棕色的🦊跳过一只懒惰的🐕.</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></div></div><p>然后，导入 <code>useI18n</code> 进行配置👇</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 某个vue页面</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">useI18n</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@vben/locale</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> t </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useI18n</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dir</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">t</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">test.type</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dir</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="📃更多功能" tabindex="-1">📃更多功能 <a class="header-anchor" href="#📃更多功能" aria-hidden="true">#</a></h2><h3 id="调整默认配置" tabindex="-1">调整默认配置 <a class="header-anchor" href="#调整默认配置" aria-hidden="true">#</a></h3><p>要调整默认配置，只需修改模块目录 <code>src/setting/project.ts</code> 文件即可。</p><h3 id="手动切换某个页面的语言" tabindex="-1">手动切换某个页面的语言 <a class="header-anchor" href="#手动切换某个页面的语言" aria-hidden="true">#</a></h3><p>要切换某个页面的语言，使用 <code>useLocale</code> hooks.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useLocale</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@vben/locale</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> changeLocale </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useLocale</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">changeLocale</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="新增语言配置" tabindex="-1">新增语言配置 <a class="header-anchor" href="#新增语言配置" aria-hidden="true">#</a></h3><p>在 <code>locale/src/lang</code> 目录下添加对应语言的目录即可。</p><p>目前项目自带语言只有 <code>zh_CN</code> 和 <code>en</code> 两种。如果需要新增，按以下步骤👇</p><ul><li>在 <code>locale/src/lang</code>下创建对应语言目录。</li><li>在 <code>locale/src/config.ts</code>中添加类型定义。</li><li>在 <code>modules/src/settings/project.ts</code>中配置语言。</li></ul><p>[待补充...]</p><h2 id="✨优化体验" tabindex="-1">✨优化体验 <a class="header-anchor" href="#✨优化体验" aria-hidden="true">#</a></h2><p>如果你使用 <code>VS Code</code> 进行开发，则推荐你安装 <a href="https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally" target="_blank" rel="noreferrer">i18n Ally</a>,</p>`,32),e=[o];function t(c,r,D,y,i,F){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{A as __pageData,d as default};