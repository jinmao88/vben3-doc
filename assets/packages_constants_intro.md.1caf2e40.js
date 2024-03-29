import{_ as t,o as d,c as e,a as o}from"./app.f71259a5.js";const A=JSON.parse('{"title":"全局变量","description":"","frontmatter":{},"headers":[{"level":2,"title":"🕸️目录结构","slug":"🕸️目录结构","link":"#🕸️目录结构","children":[]},{"level":2,"title":"📃常量列表","slug":"📃常量列表","link":"#📃常量列表","children":[{"level":3,"title":"应用常量","slug":"应用常量","link":"#应用常量","children":[]},{"level":3,"title":"断点","slug":"断点","link":"#断点","children":[]},{"level":3,"title":"缓存","slug":"缓存","link":"#缓存","children":[]},{"level":3,"title":"颜色主题","slug":"颜色主题","link":"#颜色主题","children":[]},{"level":3,"title":"菜单枚举","slug":"菜单枚举","link":"#菜单枚举","children":[]},{"level":3,"title":"多标签","slug":"多标签","link":"#多标签","children":[]},{"level":3,"title":"路由","slug":"路由","link":"#路由","children":[]},{"level":3,"title":"侧边栏","slug":"侧边栏","link":"#侧边栏","children":[]}]}],"relativePath":"packages/constants/intro.md","lastUpdated":1711702812000}'),c={name:"packages/constants/intro.md"},a=o(`<h1 id="全局变量" tabindex="-1">全局变量 <a class="header-anchor" href="#全局变量" aria-hidden="true">#</a></h1><p>在软件开发中，全局变量和枚举可以方便的管理应用生命周期内的上下文。开发者可以在开发功能时评估是否需要使用全局变量进行变量的管理和使用。</p><p><code>constants</code> 目录是存放全局变量的标准目录。</p><h2 id="🕸️目录结构" tabindex="-1">🕸️目录结构 <a class="header-anchor" href="#🕸️目录结构" aria-hidden="true">#</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">📁 constants</span></span>
<span class="line"><span style="color:#A6ACCD;">┣━━📁src</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── 📄appEnum</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts          </span><span style="color:#676E95;font-style:italic;">// 应用级枚举</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── 📄breakpoint</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts       </span><span style="color:#676E95;font-style:italic;">// 断点</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── 📄cacheEnum</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts        </span><span style="color:#676E95;font-style:italic;">// 缓存枚举</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── 📄designSetting</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts    </span><span style="color:#676E95;font-style:italic;">// 主题枚举</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── 📄menuEnum</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts         </span><span style="color:#676E95;font-style:italic;">// 菜单枚举</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── 📄multipleTabEnum</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts  </span><span style="color:#676E95;font-style:italic;">// tabs菜单枚举</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── 📄router</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts           </span><span style="color:#676E95;font-style:italic;">// 路由</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── 📄sidebar</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts          </span><span style="color:#676E95;font-style:italic;">// 侧边栏</span></span>
<span class="line"><span style="color:#A6ACCD;">  └── 📄index</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ts</span></span>
<span class="line"></span></code></pre></div><h2 id="📃常量列表" tabindex="-1">📃常量列表 <a class="header-anchor" href="#📃常量列表" aria-hidden="true">#</a></h2><p>Vben3定义了如下常量：</p><h3 id="应用常量" tabindex="-1">应用常量 <a class="header-anchor" href="#应用常量" aria-hidden="true">#</a></h3><table><thead><tr><th>常量名</th><th>值</th><th>说明</th></tr></thead><tbody><tr><td>ContentLayoutEnum</td><td><code>FULL</code>、<code>FIXED</code></td><td>调整内容宽度</td></tr><tr><td>ThemeEnum</td><td><code>DARK</code>、<code>LIGHT</code></td><td>主题颜色</td></tr><tr><td>NavBarModeEnum</td><td><code>SIDEBAR</code>、<code>MIX_SIDEBAR</code>、<code>MIX</code>、<code>TOP_MENU</code></td><td>导航栏布局样式</td></tr><tr><td>SettingButtonPositionEnum</td><td><code>AUTO</code>、<code>HEADER</code>、<code>FIXED</code></td><td>设置按钮位置</td></tr><tr><td>SessionTimeoutProcessingEnum</td><td><code>ROUTE_JUMP</code>、<code>PAGE_COVERAGE</code></td><td>SESSION超时处理方式</td></tr><tr><td>PermissionModeEnum</td><td><code>ROLE</code>、<code>BACK</code>、<code>ROUTE_MAPPING</code></td><td>权限校验模式</td></tr><tr><td>RouterTransitionEnum</td><td><code>ZOOM_FADE</code>、<code>ZOOM_OUT</code>、<code>FADE_SIDE</code>、<code>FADE</code>、<code>FADE_BOTTOM</code>、<code>FADE_SCALE</code></td><td>页面切换动画类型</td></tr><tr><td>RoleEnum</td><td><code>SUPER</code>、<code>TEST</code></td><td>角色类型</td></tr><tr><td>ComponentSizeEnum</td><td><code>DEFAULT</code>、<code>SMALL</code>、<code>LARGE</code></td><td>组件大小类型</td></tr><tr><td>ErrorTypeEnum</td><td><code>VUE</code>、<code>SCRIPT</code>、<code>RESOURCE</code>、<code>AJAX</code>、<code>PROMISE</code></td><td>错误类型</td></tr></tbody></table><h3 id="断点" tabindex="-1">断点 <a class="header-anchor" href="#断点" aria-hidden="true">#</a></h3><table><thead><tr><th>常量名</th><th>值</th><th>说明</th></tr></thead><tbody><tr><td>ScreenSizeEnum</td><td><code>XS</code>、<code>SM</code>、<code>MD</code>、<code>LG</code>、<code>XL</code>、<code>XXL</code></td><td>屏幕断点枚举</td></tr><tr><td>ScreenValueEnum</td><td><code>480</code>、<code>576</code>、<code>768</code>、<code>992</code>、<code>1200</code>、<code>1600</code></td><td>屏幕断点枚举值</td></tr></tbody></table><h3 id="缓存" tabindex="-1">缓存 <a class="header-anchor" href="#缓存" aria-hidden="true">#</a></h3><table><thead><tr><th>常量名</th><th>值</th><th>说明</th></tr></thead><tbody><tr><td>TOKEN_KEY</td><td><code>TOKEN__</code></td><td>token key</td></tr><tr><td>LOCALE_KEY</td><td><code>LOCALE__</code></td><td>locale key</td></tr><tr><td>USER_INFO_KEY</td><td><code>USER__INFO__</code></td><td>user info key</td></tr><tr><td>ROLES_KEY</td><td><code>ROLES__KEY__</code></td><td>roles key</td></tr><tr><td>PROJ_CFG_KEY</td><td><code>PROJ__CFG__KEY__</code></td><td>project config cache key</td></tr><tr><td>LOCK_INFO_KEY</td><td><code>LOCK__INFO__KEY__</code></td><td>lock screen info cache key</td></tr><tr><td>MULTIPLE_TABS_KEY</td><td><code>MULTIPLE_TABS__KEY__</code></td><td>multiple tabs key</td></tr><tr><td>APP_DARK_MODE_KEY_</td><td><code>__APP__DARK__MODE__</code></td><td>app dark mode status cache key</td></tr><tr><td>APP_LOCAL_CACHE_KEY</td><td><code>COMMON__LOCAL__KEY__</code></td><td>app local cache key</td></tr><tr><td>APP_SESSION__KEY__</td><td><code>COMMON__SESSION__KEY__</code></td><td>app session cache key</td></tr></tbody></table><h3 id="颜色主题" tabindex="-1">颜色主题 <a class="header-anchor" href="#颜色主题" aria-hidden="true">#</a></h3><table><thead><tr><th>常量名</th><th>说明</th></tr></thead><tbody><tr><td>APP_PRESET_COLOR_LIST</td><td>预编译主题色</td></tr><tr><td>HandlerSettingEnum</td><td>配置枚举</td></tr><tr><td>ThemeChangeEnum</td><td>主题配置</td></tr></tbody></table><h3 id="菜单枚举" tabindex="-1">菜单枚举 <a class="header-anchor" href="#菜单枚举" aria-hidden="true">#</a></h3><table><thead><tr><th>常量名</th><th>值</th><th>说明</th></tr></thead><tbody><tr><td>TriggerEnum</td><td><code>NONE</code>、<code>FOOTER</code>、<code>CENTER</code>、<code>HEADER</code></td><td>折叠触发器的位置</td></tr><tr><td>Mode</td><td><code>vertical</code>、<code>vertical-right</code>、<code>horizontal</code>、<code>inline</code></td><td>模式</td></tr><tr><td>MenuModeEnum</td><td><code>VERTICAL</code>、<code>HORIZONTAL</code>、<code>VERTICAL_RIGHT</code>、<code>INLINE</code></td><td>菜单类型</td></tr><tr><td>MenuSplitTypeEnum</td><td><code>NONE</code>、<code>TOP</code>、<code>LEFT</code></td><td>菜单分割类型</td></tr><tr><td>TopMenuAlignEnum</td><td><code>CENTER</code>、<code>START</code>、<code>END</code></td><td>顶部菜单对齐类型</td></tr><tr><td>MixSidebarTriggerEnum</td><td><code>HOVER</code>、<code>CLICK</code></td><td>混合侧边栏的触发类型</td></tr></tbody></table><h3 id="多标签" tabindex="-1">多标签 <a class="header-anchor" href="#多标签" aria-hidden="true">#</a></h3><table><thead><tr><th>常量名</th><th>值</th><th>说明</th></tr></thead><tbody><tr><td>TabContentEnum</td><td><code>TAB_TYPE</code>、<code>EXTRA_TYPE</code></td><td>多标签内容类型</td></tr><tr><td>TabActionEnum</td><td><code>REFRESH_PAGE</code>、<code>CLOSE_CURRENT</code>、<code>CLOSE_LEFT</code>、<code>CLOSE_RIGHT</code>、<code>CLOSE_OTHER</code>、<code>CLOSE_ALL</code>、<code>SCALE</code>、<code>CLOSE</code></td><td>多标签操作类型</td></tr></tbody></table><h3 id="路由" tabindex="-1">路由 <a class="header-anchor" href="#路由" aria-hidden="true">#</a></h3><table><thead><tr><th>常量名</th><th>值</th><th>说明</th></tr></thead><tbody><tr><td>REDIRECT_NAME</td><td>Redirect</td><td>定义路由重定向名称</td></tr><tr><td>PAGE_NOT_FOUND_NAME</td><td><code>PageNotFound</code></td><td>定义路由无法找到的名称</td></tr><tr><td>BASIC_LOGIN_PATH</td><td><code>/login</code></td><td>定义基础路由入口</td></tr><tr><td>BASIC_HOME_PATH</td><td><code>/dashboard</code></td><td>定义首页地址</td></tr><tr><td>BASIC_ERROR_PATH</td><td><code>/exception</code></td><td>错误页面地址</td></tr><tr><td>BASIC_LOCK_PATH</td><td><code>/lock</code></td><td>定义锁屏页面地址</td></tr><tr><td>PageEnum</td><td><code>BASE_LOGIN</code>、<code>BASE_HOME</code>、<code>ERROR_PAGE</code>、<code>ERROR_LOG_PAGE</code>、<code>BASE_LOCK</code></td><td>页面枚举</td></tr></tbody></table><h3 id="侧边栏" tabindex="-1">侧边栏 <a class="header-anchor" href="#侧边栏" aria-hidden="true">#</a></h3><table><thead><tr><th>常量名</th><th>值</th><th>说明</th></tr></thead><tbody><tr><td>SIDE_BAR_MINI_WIDTH</td><td><code>48</code></td><td>侧边栏最小宽度</td></tr><tr><td>SIDE_BAR_SHOw_TIT_MINI_WIDTH</td><td><code>80</code></td><td>侧边栏标题最小宽度</td></tr></tbody></table>`,23),n=[a];function s(r,l,i,h,E,_){return d(),e("div",null,n)}const C=t(c,[["render",s]]);export{A as __pageData,C as default};