# 計算機 modal

[Demo](https://timingjl.github.io/calculator_modal/)

## 判斷設備為手機版與電腦版

判斷應用程式應該要顯示手機版或是電腦版，會根據規格不同，作法而有所不同。
有些規格認為，在窄螢幕的時候，就應該要呈現手機版。但有些規格認為，就算電腦版變得很窄，還是電腦版，需要真的更換設備，或模擬出那樣的設備，才是手機版。

在這個作業的規定當中，我覺得比較像是後者。

作法上，我們也可以透過使用 `react-device-detect` 這個 npm 套件來幫助我們，他有 `205,252` 的下載量，近一個月也有更新維護，去 github 看一下他 source code 作法也覺得考慮得蠻詳細的，也可以幫助你支援很多種設備的判斷。

雖然他功能很豐富，但蠻多功能在這邊可能也用不到，我的情境僅需支援最新版本 Chrome ，所以比起額外裝一個套件來增加 js bundle 的大小，我決定要用 userAgent 來簡單判斷就好。

我參考了一些文章，寫了一個 useDeviceDetect() 的 custom hook，來幫助我取得 isMobile。

Ref:
[How to Create a Custom useDeviceDetect() React Hook](https://reedbarger.com/how-to-create-a-custom-usedevicedetect-react-hook/)

## 關於 Modal

React 16 之後開始有支援 Portal，透過 Portal 可以幫助我們將子元件渲染到父節點上。因此就能夠很容易手刻出一個 modal。

### 套件選擇

但這個作業當中，除了 modal 以外，也有很多複雜的樣式要處理，因此每一個功能都手刻的話，一方面會花很多時間，二方面也沒有足夠的時間考慮到每個細節，把元件做得很好。

因此這邊我決定用 Material-UI 來幫助我處理這些複雜和繁瑣的 UI 元件。

選擇 Material-UI 的理由是因為他是目前當紅的 UI framework ，有許多的知名團隊和開發者使用，背後也有 Google 的支持。很多人使用的套件的好處就是一有問題就能夠很快被發現，而且遇到問題也比較找得到人求助和找得到參考資料。

另一方面，在選擇套件的時候，也會希望公司大家用的技術盡量一致，可以幫助我們專案交接的時候，或是有別的同事要來幫忙一起維護的時候，降低交接和學習的成本。而且如果有同樣功能的元件，也可以大家互相引用。

過去也使用過 Ant Design ，但除了過去有知名的「聖誕彩蛋」事件會讓人懼怕以外，他能夠被客製化的程度也沒有 Material-UI 來得好；另外 bundle size 也比較肥大，因此比起 Ant Design ，我覺得 Material UI 對我而言是較好的選擇。

Material-UI 提供我們很方便的 Modal 元件可以直接使用，另外搭配 `react-draggable` 也可以創建一個可拖拉的 Modal 。

### 拖拉按鈕

拖拉的時候，到底要點選哪裡可以讓我們拖拉？ 這部分在規格上面沒有清楚註明，

如果整個 modal 對話框都是可以讓我們按住拖拉的話，我有點擔心會誤觸計算機的按鈕；另一方面，因為 UI 上面沒有給使用者一個明顯的提示，所以使用者很可能在操作的時候不會發現其實有拖拉功能，所以這邊我決定在對話框的最上面擅自加上一個拖拉的 icon ，按下那個按鈕之後可以進行拖拉。

但如果工作上遇到這樣類似的問題，我會找 UI/UX 設計師討論更好的做法。

### RWD

當畫面小於 768px 時，畫面由 480px 改為 360px。
比較常見的做法是直接在 CSS 裡面寫 media query。但 Material-UI 也提供我們另一種選擇，就是使用 useMediaQuery 這個 hook 來幫助我們做到一樣的效果。

特別 useStyles 也提供我們能夠傳入 props 來改變樣式，所以比起傳統的 CSS 作法， JSS 讓我們在做動態的樣式改變的時候，看起來更有邏輯性。

```js
const matches = useMediaQuery("(min-width:768px)");
const width = matches ? 480 : 360;
const classes = useStyles({ fullWidth, width });
```

## 計算機

### 畫面規劃

按鈕的部分我分類成三種

- 數字
- 運算符號
- 其他功能

數字的排列是網格狀的，運算符號是直的放在最右邊，其他功能是最上排橫的，然後數字的部分 0 這個按鈕還需要跨兩格。如果用 table 來處理的話，寫起來應該會蠻複雜的，優點是對於各種瀏覽器的支援應該是最好。

但題目說只需考慮最新的 Chrome ，所以這邊我用 css grid 來處理， `grid-template-areas` 這個屬性可以幫助我們定義出不同的區塊。因此可以大幅度的簡化 DOM 的複雜度，看起來更為一目瞭然。

```js
gridTemplateAreas: `
  "otherOperator otherOperator otherOperator arithmeticOperator"
  "numbers numbers numbers arithmeticOperator"
  "numbers numbers numbers arithmeticOperator"
  "numbers numbers numbers arithmeticOperator"
  "numbers numbers numbers arithmeticOperator"
`,
```

```jsx
<div className={classes.buttonsGrid}>
  <OtherOperators handleOnClick={handleOnClick} />
  <Numbers handleOnClick={handleOnClick} />
  <ArithmeticOperators handleOnClick={handleOnClick} />
</div>
```

### immutability-helper

我們知道 Redux 三大原則是

- 唯一真相來源
- State 是唯讀的
- 變更被寫成 pure function

透過知名的 [Immutable.js](https://www.npmjs.com/package/immutable) 可以幫助我們確保 state 不會被直接改變，並且 reducer 是一個 pure function ，不會改變傳入的 state 值，只會回傳一個新的 state。

但使用 Immutable.js 就無法再用原生的 js 資料型態做操作，所有物件的操作都需要使用 Immutable.js 的 Map/List ，並且若跟後端溝通，也要記得做資料的轉換，資料轉換的時候也需要再多花運算資源。

因此在這邊我選擇使用 [immutability-helper](https://www.npmjs.com/package/immutability-helper)，讓我們做到保有原本的 js 物件操作，但又能夠有 immutable 的效果。

### Round-off errors

計算機四則運算乍看之下是蠻簡單的，其實魔鬼藏在細節裡。由於 JS 是採用 IEEE 754 Floating-point 64位雙精度浮點數編碼，因此在做浮點數運算的時候會產生「捨入誤差」，例如：

```js
>>> 0.1 + 0.2
0.30000000000000004

>>> 0.2 * 0.4
0.08000000000000002
```

簡單的處理方法可以把浮點數乘上 10 的次方，變成整數之後再進行運算，可以解決一部分常見的捨入誤差。

但是這樣還是有一些狀況無法涵蓋到，例如：

```js
>>> 2.05 * 100
204.99999999999997
```

因此這邊我引入 `math.js` 提供的方法來幫忙解決。

```js
import { format, evaluate } from "mathjs";

const calculate = (numbers, operator) => {
  const precision = 14;
  const expression = `${numbers[0]}${operator}${numbers[1]}`;
  const value = evaluate(expression);
  const formattedValue = format(value, precision);
  return formattedValue;
};
```

math.js 的好處是可以幫助你解決很多煩人的狀況，但缺點是 bundle size 有點大，而且也會包含一些在這邊不會用到的運算，例如矩陣運算等等。

所以可以看看規格是否要要求到這麼精確，如果不需要的話，可能也可以用轉換成整數來運算的方式，或是別的簡單的方式來解決。

另外也可以考慮其他更適合的套件，或者情境適合的話，也可以考慮 code splitting。

## 其他

### memo

hook 當中提供我們使用 memo, useMemo 來減少多餘的渲染所造成性能上的浪費。

例如計算機按鈕其實不應該被點擊的時候都被重新渲染一次，所以我們可以用 memo 把它包起來。

### Lazy loading

React.lazy 和 Suspense 可以幫助我們做到延遲載入，例如我們的頁面當中假設存在很多功能，使用者進來的時候不一定會點 `計算機 Modal` 這個功能，等到他需要的時候，才會按下按鈕跳出計算機 modal 。

因此我們為了提升第一次進到頁面的載入速度，有一些不是馬上需要的元件我們可以不用一次全部都載入進來。

```js
const Calculator = lazy(() => import("components/Calculator"));
```

```jsx
<Suspense fallback={<div>Loading...</div>}>
  <Calculator
    fullWidth={isMobile}
    value={value}
    operator={operator}
    handleOnClick={handleOnClickCalculatorButton}
  />
</Suspense>
```

|名稱|未使用 lazy loading| 使用 lazy loading | 減少 size |
|--|--|--|--|
|main.chunk.js|24.8kB|10.8kB| 14kB |

|名稱|未使用 lazy loading| 使用 lazy loading | 提升速度 |
|--|--|--|--|
|main.chunk.js|200ms|76ms| 124ms |

### 改變主題/樣式管理

我覺得一個應用程式或是網站如果能夠做到改變主題，意味著它的顏色或樣式有被抽出來做有系統的管理，而不是把樣式和顏色色票直接寫死在 css 裡面。

這邊我透過 Material-UI 提供的 ThemeProvider 簡單來抽換所需要的顏色和樣式。
並且透過 theme/index.js 來統一管理。

設計師通常會在做網站設計之前，先制定一份 guideline ，可能會遵循原子設計方法論(Atomic Design)，概念就像是現實世界當中，所有東西都是由原子組成分子、分子組成組織，從小顆粒度的原子慢慢到大顆粒度的物體。

因此當 guideline 訂定出來之後，設計師也不能胡亂憑感覺設計，所有設計也都需要遵照 guideline 來做統一的設計，確保整個網站的樣式一致。

因此前端工程如果使用 ThemeProvider 的話，就能夠與此原子設計方法的概念搭配。未來假設 guideline 有所調整或改變，工程師也不用逐一檢查每個元件的樣式是否符合 guideline ，只需要在樣式管理裡面做調整，就能夠確保網站所有元件符合 guideline 的樣式。

```jsx
<ThemeProvider theme={theme[themeMode]}>
  <MainPage
    themeMode={themeMode}
    handleOnSetThemeMode={handleOnSetThemeMode}
  />
</ThemeProvider>
```
