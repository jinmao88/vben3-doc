import{_ as s,o as a,c as n,a as l}from"./app.23af2f2a.js";const F=JSON.parse('{"title":"配置说明","description":"","frontmatter":{},"headers":[{"level":2,"title":"关于环境配置","slug":"关于环境配置","link":"#关于环境配置","children":[{"level":3,"title":"通用配置 .env","slug":"通用配置-env","link":"#通用配置-env","children":[]},{"level":3,"title":"开发环境配置 .env.development","slug":"开发环境配置-env-development","link":"#开发环境配置-env-development","children":[]},{"level":3,"title":"生产环境配置 .env.production","slug":"生产环境配置-env-production","link":"#生产环境配置-env-production","children":[]}]},{"level":2,"title":"关于 _app.config.js","slug":"关于-app-config-js","link":"#关于-app-config-js","children":[{"level":3,"title":"如何获取","slug":"如何获取","link":"#如何获取","children":[]},{"level":3,"title":"如何新增","slug":"如何新增","link":"#如何新增","children":[]}]},{"level":2,"title":"关于 pnpm-workspace.yaml","slug":"关于-pnpm-workspace-yaml","link":"#关于-pnpm-workspace-yaml","children":[{"level":3,"title":"在根目录中使用命令行直接对 apps 中的模块添加依赖","slug":"在根目录中使用命令行直接对-apps-中的模块添加依赖","link":"#在根目录中使用命令行直接对-apps-中的模块添加依赖","children":[]}]}],"relativePath":"guide/config.md","lastUpdated":1709085289000}'),p={name:"guide/config.md"},o=l(`<h1 id="配置说明" tabindex="-1">配置说明 <a class="header-anchor" href="#配置说明" aria-hidden="true">#</a></h1><h2 id="关于环境配置" tabindex="-1">关于环境配置 <a class="header-anchor" href="#关于环境配置" aria-hidden="true">#</a></h2><p>对于系统的使用者来说，一般首先修改配置文件，进行定制化修改以符合自己业务/学习使用。环境配置推荐查看 Vite 官网的 <a href="https://vitejs.dev/guide/env-and-mode.html" target="_blank" rel="noreferrer">Env Variables and Modes</a> 说明，对于理解很有帮助。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>只有以 VITE_ 开头的变量会被嵌入到客户端侧的包中， 访问方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">console.log(i<wbr>mport.meta.env.VITE_PROT);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以 VITE_GLOB_* 开头的的变量，在编译的时候，会被加入_app.config.js配置文件当中.</p></div><h3 id="通用配置-env" tabindex="-1">通用配置 .env <a class="header-anchor" href="#通用配置-env" aria-hidden="true">#</a></h3><p>该配置文件位于 <code>apps/admin/</code> 路径下，<code>.env</code> 无论在什么环境下都会被加载，因此公共的配置可以放在这里面。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 网站标题</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_GLOB_APP_TITLE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Vben</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Admin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 简称，用于配置文件名字 不要出现空格、数字开头等特殊字符</span></span>
<span class="line"><span style="color:#FFCB6B;">VITE_GLOB_APP_SHORT_NAME</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vben_admin</span></span>
<span class="line"></span></code></pre></div><h3 id="开发环境配置-env-development" tabindex="-1">开发环境配置 .env.development <a class="header-anchor" href="#开发环境配置-env-development" aria-hidden="true">#</a></h3><p>项目以开发环境启动的时候加载该配置文件，该配置文件位于 <code>apps/admin/</code> 路径下。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 是否开启mock数据，关闭时需要自行对接后台接口</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_USE_MOCK=true</span></span>
<span class="line"><span style="color:#A6ACCD;"># 资源公共路径,需要以 /开头和结尾</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_PUBLIC_PATH=/</span></span>
<span class="line"><span style="color:#A6ACCD;"># 是否删除Console.log</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_DROP_CONSOLE=false</span></span>
<span class="line"><span style="color:#A6ACCD;"># 本地开发代理，可以解决跨域及多地址代理</span></span>
<span class="line"><span style="color:#A6ACCD;"># 如果接口地址匹配到，则会转发到http://localhost:3000，防止本地出现跨域问题</span></span>
<span class="line"><span style="color:#A6ACCD;"># 可以有多个，注意多个不能换行，否则代理将会失效</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_PROXY=[[&quot;/api&quot;,&quot;http://localhost:3000&quot;],[&quot;api1&quot;,&quot;http://localhost:3001&quot;],[&quot;/upload&quot;,&quot;http://localhost:3001/upload&quot;]]</span></span>
<span class="line"><span style="color:#A6ACCD;"># 接口地址</span></span>
<span class="line"><span style="color:#A6ACCD;"># 如果没有跨域问题，直接在这里配置即可</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_API_URL=/api</span></span>
<span class="line"><span style="color:#A6ACCD;"># 文件上传接口  可选</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_UPLOAD_URL=/upload</span></span>
<span class="line"><span style="color:#A6ACCD;"># 接口地址前缀，有些系统所有接口地址都有前缀，可以在这里统一加，方便切换</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_API_URL_PREFIX=</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>这里配置的 <code>VITE_PROXY</code> 以及 <code>VITE_GLOB_API_URL</code>， /api 需要是唯一的，不要和接口已有的名字冲突。</p><p>如果你的接口是 <a href="http://localhost:3000/api" target="_blank" rel="noreferrer">http://localhost:3000/api</a> 之类的，请考虑将 VITE_GLOB_API_URL=/xxxx 换成别的名字。</p></div><h3 id="生产环境配置-env-production" tabindex="-1">生产环境配置 .env.production <a class="header-anchor" href="#生产环境配置-env-production" aria-hidden="true">#</a></h3><p>项目以生产环境启动的时候加载该配置文件，该配置文件位于 <code>apps/admin/</code> 路径下。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 是否开启mock</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_USE_MOCK=true</span></span>
<span class="line"><span style="color:#A6ACCD;"># 接口地址 可以由nginx做转发或者直接写实际地址</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_API_URL=/api</span></span>
<span class="line"><span style="color:#A6ACCD;"># 文件上传地址 可以由nginx做转发或者直接写实际地址</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_UPLOAD_URL=/upload</span></span>
<span class="line"><span style="color:#A6ACCD;"># 接口地址前缀，有些系统所有接口地址都有前缀，可以在这里统一加，方便切换</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_API_URL_PREFIX=</span></span>
<span class="line"><span style="color:#A6ACCD;"># 是否删除Console.log</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_DROP_CONSOLE=true</span></span>
<span class="line"><span style="color:#A6ACCD;"># 资源公共路径,需要以 / 开头和结尾</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_PUBLIC_PATH=/</span></span>
<span class="line"><span style="color:#A6ACCD;"># 打包是否输出gz｜br文件</span></span>
<span class="line"><span style="color:#A6ACCD;"># 可选: gzip | brotli | none</span></span>
<span class="line"><span style="color:#A6ACCD;"># 也可以有多个, 例如 ‘gzip’|&#39;brotli&#39;,这样会同时生成 .gz和.br文件</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_BUILD_COMPRESS = &#39;gzip&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"># 打包是否压缩图片</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_USE_IMAGEMIN = false</span></span>
<span class="line"><span style="color:#A6ACCD;"># 打包是否开启pwa功能</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_USE_PWA = false</span></span>
<span class="line"><span style="color:#A6ACCD;"># 是否兼容旧版浏览器。开启后打包时间会慢一倍左右。会多打出旧浏览器兼容包,且会根据浏览器兼容性自动使用相应的版本</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_LEGACY = false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="关于-app-config-js" tabindex="-1">关于 _app.config.js <a class="header-anchor" href="#关于-app-config-js" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用</p><p>_app.config.js 用于项目在打包后，需要动态修改配置的需求，如接口地址，不用重新进行打包，可在打包后修改 <code>/dist/_app.config.js</code> 内的变量，刷新即可更新代码内的局部变量。</p></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// _app.config.js</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 变量名命名规则  __PRODUCTION__xxx_CONF__   xxx：为.env配置的VITE_GLOB_APP_SHORT_NAME</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">__PRODUCTION__VUE_VBEN_ADMIN__CONF__ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">VITE_GLOB_APP_TITLE</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vben admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">VITE_GLOB_APP_SHORT_NAME</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue_vben_admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">VITE_GLOB_API_URL</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">VITE_GLOB_API_URL_PREFIX</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">VITE_GLOB_UPLOAD_URL</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/upload</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h3 id="如何获取" tabindex="-1">如何获取 <a class="header-anchor" href="#如何获取" aria-hidden="true">#</a></h3><p>想要获取 <code>_app.config.js</code> 内的变量，可以使用 <code>src/hooks/setting/index.ts</code> 提供的函数来进行获取。</p><h3 id="如何新增" tabindex="-1">如何新增 <a class="header-anchor" href="#如何新增" aria-hidden="true">#</a></h3><ol><li>首先在 .env 或者对应的开发环境配置文件内，新增需要可动态配置的变量，需要以 VITE_GLOB_开头；</li><li>VITE_GLOB_ 开头的变量会自动加入环境变量，通过在 src/types/config.d.ts 内修改 GlobEnvConfig 和 GlobConfig 两个环境变量的值来定义新添加的类型；</li><li>useGlobSetting 函数中添加刚新增的返回值即可；</li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  VITE_GLOB_APP_TITLE</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  VITE_GLOB_API_URL</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  VITE_GLOB_APP_SHORT_NAME</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  VITE_GLOB_API_URL_PREFIX</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  VITE_GLOB_UPLOAD_URL</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> ENV</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> useGlobSetting </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SettingWrap</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// Take global configuration</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">glob</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Readonly</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">GlobConfig</span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VITE_GLOB_APP_TITLE</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    apiUrl</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VITE_GLOB_API_URL</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    shortName</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VITE_GLOB_APP_SHORT_NAME</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    urlPrefix</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VITE_GLOB_API_URL_PREFIX</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    uploadUrl</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">VITE_GLOB_UPLOAD_URL</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">glob</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Readonly</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">GlobConfig</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="关于-pnpm-workspace-yaml" tabindex="-1">关于 pnpm-workspace.yaml <a class="header-anchor" href="#关于-pnpm-workspace-yaml" aria-hidden="true">#</a></h2><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F07178;">packages</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">packages/*</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">apps/*</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">configs/*</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scripts</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><p>该文件表示告诉 pnpm 该项目/存储库是一个 monorepo 项目，并且该项目有如上四个 workspace，分别位于 <code>packages</code>、<code>apps</code>、<code>configs</code>、<code>scripts</code>，这些文件夹内都是独立的 app 或者 pkg。想要了解有关 workspace 的更多内容，请👉<a href="https://www.pnpm.cn/workspaces" target="_blank" rel="noreferrer">这里</a>。</p><p>举个例子，我们在项目中一般需要 <strong>使用/封装</strong> 工具类，并把该类放在统一的包下面，利于管理。以本项目为例，<code>packages/utils</code> 下面有多个工具类，那么如何引入到 app 下面呢？</p><p>首先想到的就是安装、导入、调用，我们来 try 一下！</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 进入到需要使用工具类的 app 模块</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apps/admin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加 pkg 下的工具类</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@vben/utils</span></span>
<span class="line"></span></code></pre></div><p>然后就可以在 app 中导入并正常使用 <code>packages/utils</code> 中的工具啦！欸，欸，欸，不对呀，那我要是自己在 packages 中新建其它的库呢？</p><div class="tip custom-block"><p class="custom-block-title">小栗子</p><p>好，假设我们现在需要自定义一个小小的加/解密的库，并把该库放到 packages 下，然后在 app 的模块中引入，这该如何做呢？</p></div><ol><li><p>在 <code>packages</code> 目录下初始化库；</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">packages</span></span>
<span class="line"><span style="color:#FFCB6B;">mkdir</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">secret</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">secret</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span>
<span class="line"></span></code></pre></div></li><li><p>修改 <code>package.json</code>，然后在创建入口文件添加相应的方法（如果需要添加 ts 的配置等相关内容，创建并填充 <code>tsconfig.json</code>，此处示例不需要）；</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">@vben/secret</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C3E88D;">private</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">true</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C3E88D;">version</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">0.0.1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C3E88D;">author</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">vben</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;"># 指定入口文件，不然引入时飘红~</span></span>
<span class="line"><span style="color:#89DDFF;">  &quot;</span><span style="color:#C3E88D;">main</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">path/入口文件</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></li><li><p>在需要使用的模块中安装依赖，然后就可以调用啦；</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">app/admin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加依赖</span></span>
<span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@vben/secret</span></span>
<span class="line"></span></code></pre></div><div class="danger custom-block"><p class="custom-block-title">添加依赖时可能会出现以下错误：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">$</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@vben/secret</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#FFCB6B;">ERR_PNPM_FETCH_404</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">GET</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://registry.npmmirror.com/@vben%2Fexample:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Found</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">404</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">This</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">error</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">happened</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">while</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">installing</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">direct</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dependency</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">of</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">YourLocalPath</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">@vben/secret</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">is</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">not</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">in</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">registry,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">or</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">you</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">have</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">no</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">permission</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">to</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">it.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">No</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">authorization</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">header</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">was</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">the</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">request.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">..</span><span style="color:#FFCB6B;">/</span><span style="color:#82AAFF;">..</span><span style="color:#A6ACCD;">                                    </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Progress:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">resolved</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">110</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reused</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">110</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">downloaded</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#C3E88D;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">added</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span></code></pre></div><p>如果失败，可以 <strong>手动</strong> 在应用该库模块的 <code>package.json</code> 文件中添加依赖，然后使用 <code>pnpm i</code> 即可完成安装，之后就可以导入该工具方法并使用啦。</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">devDependencies</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">@vben/secret</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">workspace:*</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div></div></li></ol><h3 id="在根目录中使用命令行直接对-apps-中的模块添加依赖" tabindex="-1">在根目录中使用命令行直接对 apps 中的模块添加依赖 <a class="header-anchor" href="#在根目录中使用命令行直接对-apps-中的模块添加依赖" aria-hidden="true">#</a></h3><ol><li>在 <strong>根目录</strong> 的 <code>package.json</code> 文件中添加以下内容：</li></ol><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  scripts</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">admin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pnpm --filter @apps/admin</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>配置之后就可以直接在项目的 <strong>根目录</strong> 中为指定模块安装相应的依赖（注意：此种方式的命令 <strong>必须在项目的根目录</strong> 中执行）：</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">admin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">package</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div>`,36),e=[o];function c(t,r,C,D,y,i){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{F as __pageData,d as default};