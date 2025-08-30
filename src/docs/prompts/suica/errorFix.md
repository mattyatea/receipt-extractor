# 1　
こんな感じのえらが出たから直して

"C:\Program Files\Volta\node.exe" --import file:/C:/Users/mattyatea/AppData/Local/Programs/WebStorm/plugins/nodeJS/js/ts-file-loader/node_modules/tsx/dist/loader.cjs D:\suica0\src\extractModule\index.ts
[SuicaLogin] [INFO] 2025-08-30T20:38:00.157Z - login Now...
[SuicaLogin] [INFO] 2025-08-30T20:38:01.814Z - login Info Filling...
[Suica] [ERROR] 2025-08-30T20:38:08.180Z - PDFダウンロード中にエラーが発生しました: Error: locator.getAttribute: Error: strict mode violation: locator('tr:has(input[name="printCheck"])').first().locator('td').first().locator('input') resolved to 102 elements:
    1) <input value="1" type="checkbox" name="selectAll" checked="checked" onclick="CheckOnAll()"/> aka locator('input[name="selectAll"]')
    2) <input value="100" type="checkbox" name="printCheck" checked="checked"/> aka getByRole('row', { name: '08/29 ﾊﾞｽ等 ちばグリ \\23 -2,700', exact: true }).getByRole('checkbox')
    3) <input value="99" type="checkbox" name="printCheck" checked="checked"/> aka getByRole('row', { name: '08/28 入 新宿 出 東京 \\2,723 -208', exact: true }).getByRole('checkbox')
    4) <input value="98" type="checkbox" name="printCheck" checked="checked"/> aka getByRole('row', { name: '08/28 ｶｰﾄﾞ モバイル \\2,931 +2,910', exact: true }).getByRole('checkbox')
    5) <input value="97" type="checkbox" name="printCheck" checked="checked"/> aka getByRole('row', { name: '08/28 入 都六本木 出 都 新宿 \\21 -220', exact: true }).getByRole('checkbox')
    6) <input value="96" type="checkbox" name="printCheck" checked="checked"/> aka getByRole('row', { name: '08/28 ｶｰﾄﾞ モバイル \\241 +210', exact: true }).getByRole('checkbox')
    7) <input value="95" type="checkbox" name="printCheck" checked="checked"/> aka getByRole('row', { name: '08/28 入 地八丁堀 出 地六本木 \\31 -178', exact: true }).getByRole('checkbox')
    8) <input value="94" type="checkbox" name="printCheck" checked="checked"/> aka getByRole('row', { name: '08/28 入 東金 出 八丁堀 \\209 -1,166', exact: true }).getByRole('checkbox')
    9) <input value="93" type="checkbox" name="printCheck" checked="checked"/> aka getByRole('row', { name: '08/28 ｶｰﾄﾞ モバイル \\1,375 +1,344', exact: true }).getByRole('checkbox')
    10) <input value="92" type="checkbox" name="printCheck" checked="checked"/> aka getByRole('row', { name: '08/27 入 東金 出 千葉 \\31 -506', exact: true }).getByRole('checkbox')
    ...

Call log:
  - waiting for locator('tr:has(input[name="printCheck"])').first().locator('td').first().locator('input')


プロセスは終了コード 0 で終了しました


# 2
ultrathink

まだ治ってないので、
@src/docs/examples/suica.md のHTMLを参考に、深く調査して
"C:\Program Files\Volta\node.exe" --import file:/C:/Users/mattyatea/AppData/Local/Programs/WebStorm/plugins/nodeJS/js/ts-file-loader/node_modules/tsx/dist/loader.cjs D:\suica0\src\extractModule\index.ts
[SuicaLogin] [INFO] 2025-08-30T20:39:19.714Z - login Now...
[SuicaLogin] [INFO] 2025-08-30T20:39:21.219Z - login Info Filling...
[Suica] [ERROR] 2025-08-30T20:39:27.295Z - PDFダウンロード中にエラーが発生しました: Error: locator.getAttribute: Error: strict mode violation: locator('tr:has(input[name="printCheck"])').first().locator('td').first().locator('input[name="printCheck"]') resolved to 101 elements:
1) <input value="100" type="checkbox" name="printCheck" checked="checked"/> aka getByRole('row', { name: '08/29 ﾊﾞｽ等 ちばグリ \\23 -2,700', exact: true }).getByRole('checkbox')
2) <input value="99" type="checkbox" name="printCheck" checked="checked"/> aka getByRole('row', { name: '08/28 入 新宿 出 東京 \\2,723 -208', exact: true }).getByRole('checkbox')
3) <input value="98" type="checkbox" name="printCheck" checked="checked"/> aka getByRole('row', { name: '08/28 ｶｰﾄﾞ モバイル \\2,931 +2,910', exact: true }).getByRole('checkbox')
4) <input value="97" type="checkbox" name="printCheck" checked="checked"/> aka getByRole('row', { name: '08/28 入 都六本木 出 都 新宿 \\21 -220', exact: true }).getByRole('checkbox')
5) <input value="96" type="checkbox" name="printCheck" checked="checked"/> aka getByRole('row', { name: '08/28 ｶｰﾄﾞ モバイル \\241 +210', exact: true }).getByRole('checkbox')
6) <input value="95" type="checkbox" name="printCheck" checked="checked"/> aka getByRole('row', { name: '08/28 入 地八丁堀 出 地六本木 \\31 -178', exact: true }).getByRole('checkbox')
7) <input value="94" type="checkbox" name="printCheck" checked="checked"/> aka getByRole('row', { name: '08/28 入 東金 出 八丁堀 \\209 -1,166', exact: true }).getByRole('checkbox')
8) <input value="93" type="checkbox" name="printCheck" checked="checked"/> aka getByRole('row', { name: '08/28 ｶｰﾄﾞ モバイル \\1,375 +1,344', exact: true }).getByRole('checkbox')
9) <input value="92" type="checkbox" name="printCheck" checked="checked"/> aka getByRole('row', { name: '08/27 入 東金 出 千葉 \\31 -506', exact: true }).getByRole('checkbox')
10) <input value="91" type="checkbox" name="printCheck" checked="checked"/> aka getByRole('row', { name: '08/27 ｶｰﾄﾞ モバイル \\537 +506', exact: true }).getByRole('checkbox')
...

Call log:
- waiting for locator('tr:has(input[name="printCheck"])').first().locator('td').first().locator('input[name="printCheck"]')


プロセスは終了コード 0 で終了しました

# 3 
まだエラーが起こってる
"C:\Program Files\Volta\node.exe" --import file:/C:/Users/mattyatea/AppData/Local/Programs/WebStorm/plugins/nodeJS/js/ts-file-loader/node_modules/tsx/dist/loader.cjs D:\suica0\src\extractModule\index.ts
[SuicaLogin] [INFO] 2025-08-30T20:44:05.271Z - login Now...
[SuicaLogin] [INFO] 2025-08-30T20:44:06.761Z - login Info Filling...
[Suica] [ERROR] 2025-08-30T20:44:11.831Z - PDFダウンロード中にエラーが発生しました: Error: locator.textContent: Error: strict mode violation: locator('tr:has(input[name="printCheck"][value="100"])').locator('td:nth-child(2)') resolved to 102 elements:
1) <td width="100px" align="center" class="pad08 grybg02">…</td> aka getByRole('cell', { name: '月日', exact: true })
2) <td class="whtbg" align="center">…</td> aka getByRole('cell', { name: '08/29', exact: true })
3) <td class="whtbg" align="center">…</td> aka locator('tr:nth-child(3) > td:nth-child(2)')
4) <td class="whtbg" align="center">…</td> aka locator('tr:nth-child(4) > td:nth-child(2)')
5) <td class="whtbg" align="center">…</td> aka locator('tr:nth-child(5) > td:nth-child(2)')
6) <td class="whtbg" align="center">…</td> aka locator('tr:nth-child(6) > td:nth-child(2)')
7) <td class="whtbg" align="center">…</td> aka locator('tr:nth-child(7) > td:nth-child(2)')
8) <td class="whtbg" align="center">…</td> aka locator('tr:nth-child(8) > td:nth-child(2)')
9) <td class="whtbg" align="center">…</td> aka locator('tr:nth-child(9) > td:nth-child(2)')
10) <td class="whtbg" align="center">…</td> aka getByRole('cell', { name: '08/27' }).nth(1)
...

Call log:
- waiting for locator('tr:has(input[name="printCheck"][value="100"])').locator('td:nth-child(2)')


プロセスは終了コード 0 で終了しました

# 4
まだ治ってなさそう
仕組みを考え直した方がいいかも
"C:\Program Files\Volta\node.exe" --import file:/C:/Users/mattyatea/AppData/Local/Programs/WebStorm/plugins/nodeJS/js/ts-file-loader/node_modules/tsx/dist/loader.cjs D:\suica0\src\extractModule\index.ts
[SuicaLogin] [INFO] 2025-08-30T20:48:01.937Z - login Now...
[SuicaLogin] [INFO] 2025-08-30T20:48:03.817Z - login Info Filling...
[Suica] [ERROR] 2025-08-30T20:48:08.912Z - PDFダウンロード中にエラーが発生しました: Error: locator.textContent: Error: strict mode violation: locator('tr:has(input[name="printCheck"][value="100"])').first().locator('td:nth-child(2)') resolved to 102 elements:
1) <td width="100px" align="center" class="pad08 grybg02">…</td> aka getByRole('cell', { name: '月日', exact: true })
2) <td class="whtbg" align="center">…</td> aka getByRole('cell', { name: '08/29', exact: true })
3) <td class="whtbg" align="center">…</td> aka locator('tr:nth-child(3) > td:nth-child(2)')
4) <td class="whtbg" align="center">…</td> aka locator('tr:nth-child(4) > td:nth-child(2)')
5) <td class="whtbg" align="center">…</td> aka locator('tr:nth-child(5) > td:nth-child(2)')
6) <td class="whtbg" align="center">…</td> aka locator('tr:nth-child(6) > td:nth-child(2)')
7) <td class="whtbg" align="center">…</td> aka locator('tr:nth-child(7) > td:nth-child(2)')
8) <td class="whtbg" align="center">…</td> aka locator('tr:nth-child(8) > td:nth-child(2)')
9) <td class="whtbg" align="center">…</td> aka locator('tr:nth-child(9) > td:nth-child(2)')
10) <td class="whtbg" align="center">…</td> aka getByRole('cell', { name: '08/27' }).nth(1)
...

Call log:
- waiting for locator('tr:has(input[name="printCheck"][value="100"])').first().locator('td:nth-child(2)')


プロセスは終了コード 0 で終了しました


