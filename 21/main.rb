def sum(input)
  res = 0
  while(input != 0) do
    res += input % 10
    input /= 10
  end
  res
end

File.open(ARGV[0]).each_line do |line|
    p sum(line.to_i)
end
