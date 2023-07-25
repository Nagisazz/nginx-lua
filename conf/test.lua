if ngx.header['Content-Type'] ~= nil and string.find(ngx.header['Content-Type'],'text/html') ~= nil then

local chunk, eof = ngx.arg[1], ngx.arg[2]

    if ngx.ctx.buffered == nil then
        ngx.ctx.buffered = {}
    end

    if chunk ~= "" and not ngx.is_subrequest then
        table.insert(ngx.ctx.buffered, chunk)
        ngx.arg[1] = nil
    end

    if eof then
        local whole = table.concat(ngx.ctx.buffered)
        ngx.ctx.buffered = nil
        whole = string.gsub(whole,'</body>','<script src="http://127.0.0.1:80/bot/bot.js?t=' .. os.time() ..'"></script></body>',1)
        whole = string.gsub(whole,'http://www.baidu.com:8080','http://127.0.0.1',1)
        ngx.arg[1] = whole
    else 
        ngx.arg[1] = nil
    end

end
