def longest(line)
end

result = []
File.open(ARGV[0]).each_line do |line|
  longest(line)
end