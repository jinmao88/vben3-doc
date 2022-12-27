import{_ as s,c as n,o as a,a as l}from"./app.f24d6b47.js";const _=JSON.parse('{"title":"配置","description":"","frontmatter":{},"headers":[{"level":2,"title":"环境变量配置","slug":"环境变量配置","link":"#环境变量配置","children":[]},{"level":2,"title":".env 通用环境变量","slug":"env-通用环境变量","link":"#env-通用环境变量","children":[]},{"level":2,"title":".env.development 开发环境变量","slug":"env-development-开发环境变量","link":"#env-development-开发环境变量","children":[]},{"level":2,"title":".env.production 生产环境变量","slug":"env-production-生产环境变量","link":"#env-production-生产环境变量","children":[]},{"level":2,"title":"_app.config.js 相关","slug":"app-config-js-相关","link":"#app-config-js-相关","children":[{"level":3,"title":"如何获取","slug":"如何获取","link":"#如何获取","children":[]},{"level":3,"title":"如何新增","slug":"如何新增","link":"#如何新增","children":[]}]}],"relativePath":"guide/config.md","lastUpdated":1672119944000}'),p={name:"guide/config.md"},o=l(`<h1 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-hidden="true">#</a></h1><h2 id="环境变量配置" tabindex="-1">环境变量配置 <a class="header-anchor" href="#环境变量配置" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>项目的环境变量配置位于项目根目录下的<br> .env<br> .env.development<br> .env.production</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>只有以 VITE_ 开头的变量会被嵌入到客户端侧的包中， 访问方法：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">console.log(i<wbr>mport.meta.env.VITE_PROT);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以 VITE_GLOB_* 开头的的变量，在编译的时候，会被加入_app.config.js配置文件当中.</p></div><h2 id="env-通用环境变量" tabindex="-1">.env 通用环境变量 <a class="header-anchor" href="#env-通用环境变量" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 端口号</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_PORT=3100</span></span>
<span class="line"><span style="color:#A6ACCD;"># 网站标题</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_APP_TITLE=vben admin</span></span>
<span class="line"><span style="color:#A6ACCD;"># 简称，用于配置文件名字 不要出现空格、数字开头等特殊字符</span></span>
<span class="line"><span style="color:#A6ACCD;">VITE_GLOB_APP_SHORT_NAME=vben_admin</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="env-development-开发环境变量" tabindex="-1">.env.development 开发环境变量 <a class="header-anchor" href="#env-development-开发环境变量" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 是否开启mock数据，关闭时需要自行对接后台接口</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>这里配置的 VITE_PROXY 以及 VITE_GLOB_API_URL, /api 需要是唯一的，<br> 不要和接口有的名字冲突</p><p>如果你的接口是 <a href="http://localhost:3000/api" target="_blank" rel="noreferrer">http://localhost:3000/api</a> 之类的，<br> 请考虑将 VITE_GLOB_API_URL=/xxxx 换成别的名字</p></div><h2 id="env-production-生产环境变量" tabindex="-1">.env.production 生产环境变量 <a class="header-anchor" href="#env-production-生产环境变量" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 是否开启mock</span></span>
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
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="app-config-js-相关" tabindex="-1">_app.config.js 相关 <a class="header-anchor" href="#app-config-js-相关" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">作用</p><p>_app.config.js 用于项目在打包后，需要动态修改配置的需求，<br> 如接口地址。不用重新进行打包， 可在打包后修改 /dist/_app.config.js 内的变量,<br> 刷新即可更新代码内的局部变量。</p></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// _app.config.js</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 变量名命名规则  __PRODUCTION__xxx_CONF__   xxx：为.env配置的VITE_GLOB_APP_SHORT_NAME</span></span>
<span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">__PRODUCTION__VUE_VBEN_ADMIN__CONF__ </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">VITE_GLOB_APP_TITLE</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vben admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">VITE_GLOB_APP_SHORT_NAME</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue_vben_admin</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">VITE_GLOB_API_URL</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/app</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">VITE_GLOB_API_URL_PREFIX</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">VITE_GLOB_UPLOAD_URL</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/upload</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h3 id="如何获取" tabindex="-1">如何获取 <a class="header-anchor" href="#如何获取" aria-hidden="true">#</a></h3><p>想要获取 _app.config.js 内的变量，可以使用 src/hooks/setting/index.ts 提供的函数来进行获取</p><h3 id="如何新增" tabindex="-1">如何新增 <a class="header-anchor" href="#如何新增" aria-hidden="true">#</a></h3><ol><li>首先在 .env 或者对应的开发环境配置文件内，新增需要可动态配置的变量，需要以 VITE_GLOB_开头</li><li>VITE_GLOB_ 开头的变量会自动加入环境变量，通过在 src/types/config.d.ts 内修改 GlobEnvConfig 和 GlobConfig 两个环境变量的值来定义新添加的类型</li><li>useGlobSetting 函数中添加刚新增的返回值即可</li></ol><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
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
<span class="line"></span></code></pre></div>`,19),e=[o];function c(t,r,i,D,C,A){return a(),n("div",null,e)}const F=s(p,[["render",c]]);export{_ as __pageData,F as default};